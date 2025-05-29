import { ICharacter } from "../data/characters.ts";

export type PlayerColor = "#00E9C2" | "#DABD00" | "#8400FF" | "#AFEF00" | "#E20087" | "#006DFB"

export const playersColors: PlayerColor[] = ["#00E9C2", "#DABD00", "#8400FF", "#AFEF00", "#E20087", "#006DFB"]

export function getRandomPlayerColor(players: ICharacter[]) {
    const playerColors = players.map(x => x.color)
    const freeColors = playersColors.filter(x => !playerColors.includes(x))
    console.log(playerColors, freeColors)
    
    return freeColors[Math.floor(Math.random() * freeColors.length)]
}