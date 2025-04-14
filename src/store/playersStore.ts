import { create } from "zustand";
import {positions} from "../components/cells/positions.ts";
import {PLAYER_COUNT} from "../components/utils";
import {characters, ICharacter} from "../data/characters.ts";
import {moneyDurationMs} from "../components/utils/animations/money/money-animation.tsx";

interface PlayersState {
  players: ICharacter[],
  cells: number[][],
  changePlayersMoney: (playerId: number, difference: number) => void,
  getPosition: (playerId: number) => { x: number, y: number },
  movePlayer: (playerId: number, value: number) => void,
}

const initialCells = [
  Array.from({ length: PLAYER_COUNT }, (_, idx: number) => idx),
  ...Array.from({ length: positions.length - 1 }, () => []),
];

const usePlayersStore = create<PlayersState>()((set, getState) => ({
  players: characters,
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
  },

  movePlayer: (playerId: number, value: number) => {
    const cells = getState().cells;
    const currentIndex = Math.max(cells.findIndex(row => row.includes(playerId)), 0);

    const newIndex = (currentIndex + value + cells.length) % cells.length;

    const newCells = cells.map((row, idx) => {
      if (idx === currentIndex) {
        return row.filter(p => p !== playerId);
      } else if (idx === newIndex) {
        return [...row, playerId];
      } else {
        return row;
      }
    });

    set({ cells: newCells });
  }
}))

export default usePlayersStore;