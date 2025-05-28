import { ICharacter } from "../data/characters.ts";

export interface IBattle {
    player1: ICharacter,
    player2: ICharacter,
    result1?: IBattleResult,
    result2?: IBattleResult,
}

export interface IBattleResult {
    score: number,
}

export interface IBattleResultPopup {
    winner: ICharacter,
    loser: ICharacter,
    resultWinner: IBattleResult,
    resultLooser: IBattleResult,
    isDraw: boolean,
}

export interface IBattleStartPopup {
    player1Name: string,
    player2Name: string,
    whoStart?: string,
}

export const BATTLE_MONEY = 250