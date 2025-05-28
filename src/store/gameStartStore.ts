import { getRandomPlayerColor } from "../domain/player.ts";
import { create } from "zustand/index";
import usePlayersStore from "./playersStore.ts";
import { ICharacter, INITIAL_BUDGET, INITIAL_RANK } from "../data/characters.ts";

export interface IGameStartStore {
    players: ICharacter[],
    addPlayer: () => void,
    changePlayerName: (position: number, newPlayer: string) => void,
    startGame: () => void,
}

const useGameStartStore = create<IGameStartStore>()((set, getState) => ({
    players: [
        {
            id: 0,
            name: "Игрок 1",
            color: getRandomPlayerColor([]),
            money: INITIAL_BUDGET,
            rank: INITIAL_RANK,
            position: 0,
            fullImg: "/characters/full/full_0.png" // TODO
        }
    ],
    addPlayer: () => {
        const newPlayer: ICharacter = {
            id: getState().players.length,
            name: `Игрок ${getState().players.length + 1}`,
            color: getRandomPlayerColor(getState().players),
            money: INITIAL_BUDGET,
            rank: INITIAL_RANK,
            position: 0,
            fullImg: "/characters/full/full_0.png" // TODO
        }
        
        set({
            players: [...getState().players, newPlayer]
        })
    },
    changePlayerName: (position, newPlayerName) => {
        const newPlayers = getState().players.map(
            (player, index) => {
                if (index == position) {
                    return { ...player, name: newPlayerName }
                } else {
                    return player
                }
            }
        ) 
        
        set({ players: newPlayers })
    },
    startGame: () => {
        usePlayersStore.getState().setPlayers(getState().players)
    }
}))

export default useGameStartStore;