import { getRandomPlayerColor, IPlayer } from "../domain/player.ts";
import { create } from "zustand/index";
import useGameStore from "./gameStore.ts";

export interface IGameStartStore {
    players: IPlayer[],
    addPlayer: () => void,
    changePlayerName: (position: number, newPlayer: string) => void,
    startGame: () => void,
}

const useGameStartStore = create<IGameStartStore>()((set, getState) => ({
    players: [
        {
            name: "Игрок 1",
            color: getRandomPlayerColor([])
        }
    ],
    addPlayer: () => {
        const newPlayer: IPlayer = {
            name: `Игрок ${getState().players.length + 1}`,
            color: getRandomPlayerColor(getState().players),
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
        useGameStore.getState().setPlayers(getState().players)
    }
}))

export default useGameStartStore;