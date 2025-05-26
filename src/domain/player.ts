export interface IPlayer {
    name: string,
    color: PlayerColor,
}

export type PlayerColor = "red" | "green" | "blue" | "orange" | "pink" | "black"

export const playersColors: PlayerColor[] = ["red", "green", "blue", "orange", "pink", "black"]

export function getRandomPlayerColor(players: IPlayer[]) {
    const playerColors = players.map(x => x.color)
    const freeColors = playersColors.filter(x => !playerColors.includes(x))
    console.log(playerColors, freeColors)
    
    return freeColors[Math.floor(Math.random() * freeColors.length)]
}