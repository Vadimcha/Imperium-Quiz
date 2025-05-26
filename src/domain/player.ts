import { ICharacter } from "../data/characters.ts";

export type PlayerColor = "red" | "green" | "blue" | "orange" | "pink" | "black"

export const playersColors: PlayerColor[] = ["red", "green", "blue", "orange", "pink", "black"]

export function getRandomPlayerColor(players: ICharacter[]) {
    const playerColors = players.map(x => x.color)
    const freeColors = playersColors.filter(x => !playerColors.includes(x))
    console.log(playerColors, freeColors)
    
    return freeColors[Math.floor(Math.random() * freeColors.length)]
}

export function generateId() {
    return Math.round(Math.random() * 1000000)
}