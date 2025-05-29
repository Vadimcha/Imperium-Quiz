import { create } from "zustand";
import {positions} from "../components/cells/positions.ts";
import {PLAYER_COUNT} from "../utils";
import {ICharacter, RANK_RANGES} from "../data/characters.ts";
import {moneyDurationMs} from "../utils/animations/money/money-animation.tsx";
import useGameStore from "./gameStore.ts";
import gameOverPopupStore from "./gameOverPopupStore.ts";

interface PlayersState {
  players: ICharacter[],
  cells: number[][],
  changePlayersMoney: (playerId: number, difference: number) => void,
  getPosition: (playerId: number) => { x: number, y: number },
  movePlayer: (playerId: number, value: number) => void,
  setPlayers: (players: ICharacter[]) => void,
  playerLoose: (playerId: number) => void,
  setRankByScore: (playerId: number) => void,
}

const initialCells = [
  Array.from({ length: PLAYER_COUNT }, (_, idx: number) => idx),
  ...Array.from({ length: positions.length - 1 }, () => []),
];

const usePlayersStore = create<PlayersState>()((set, getState) => ({
  players: [],
  cells: initialCells,

  getPosition: (playerId: number) => {
    const cells = getState().cells;
    const currentIndex = Math.max(cells.findIndex(row => row.includes(playerId)), 0);

    let x = positions[currentIndex].x - 40;
    if(cells[currentIndex].length === 2 && cells[currentIndex][0] === playerId) {
      x -= 20;
    } else if(cells[currentIndex].length === 2 && cells[currentIndex][1] === playerId) {
      x += 20
    } else if(cells[currentIndex].length === 3) {
      if(cells[currentIndex][0] === playerId) {
        x -= 30;
      } else if (cells[currentIndex][2] === playerId) {
        x += 30;
      }
    }
    return { x: x, y: positions[currentIndex].y - 50 }
  },
  changePlayersMoney: (playerId: number, difference: number) => {
    if (difference === 0) return;

    const totalDuration = moneyDurationMs;
    const steps = 60;
    const stepTime = totalDuration / steps;
    const stepDiff = difference / steps;

    let currentStep = 0;

    const intervalId = setInterval(() => {
      currentStep++;

      set(() => {
        const updatedPlayers = getState().players.map(p => {
          if (p.id === playerId) {
            return { ...p, money: p.money + stepDiff };
          }
          return p;
        });

        return { ...getState(), players: updatedPlayers };
      });

      if (currentStep >= steps) {
        clearInterval(intervalId);

        set(() => {
          const updatedPlayers = getState().players.map(p => {
            if (p.id === playerId) {
              const beginValue = p.money - stepDiff * steps;
              return { ...p, money: beginValue + difference };
            }
            return p;
          });

          return { ...getState(), players: updatedPlayers };
        });
      }
    }, stepTime);

    // check loose
    const playersMoney = usePlayersStore.getState().players.find((p) => p.id == playerId)!.money;
    if(playersMoney + difference < 0) {
      gameOverPopupStore.getState().showPopup(playerId);
      return;
    }

    // recheck rank
    getState().setRankByScore(playerId)
  },
  setRankByScore: (playerId: number) => {
    const player = getState().players.find(p => p.id == playerId);
    if (!player) return;

    const found = RANK_RANGES.find(range =>
      player.money >= range.min && (range.max === null || player.money < range.max)
    );

    if (found && player.rank !== found.title) {
      console.log("BIBA", found);
      const updatedPlayers = getState().players.map(p => {
        if (p.id === player.id) return { ...p, rank: found.title };
        return p;
      });

      set({ players: updatedPlayers });
    }
  },
  movePlayer: (playerId: number, value: number) => {
    set({
      players: getState().players.map(player => {
        if (player.id == playerId) {
          return {...player, position: value}
        } else {
          return player
        }
      })
    })
  },
  setPlayers: (players) => set({ players }),
  playerLoose: (playerId: number) => {
    set({
      players: getState().players.filter(x => x.id != playerId)
    })
    if(getState().players.length == 1) {
      gameOverPopupStore.getState().showPopup(getState().players[0].id);
    }
  }
}))

export function getCurrentPlayer(): ICharacter {
  const activePlayer = useGameStore.getState().activePlayer
  return usePlayersStore.getState().players[activePlayer]
}

export default usePlayersStore;