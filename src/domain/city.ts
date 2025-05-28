import { IMove } from "../data/moves.ts";
import { ICharacter } from "../data/characters.ts";

export interface ICity extends IMove {
    currentLevel: number,
    ownerId?: number,
    levels: ICityLevel[],
    price: number,
    type: "city",
}

export interface ICityLevel {
    level: number,
    tax: number,
    priceToNextLevel?: number,
    moneyEveryRound: number,
}

export interface ICityPopup {
    title: string,
    message: string,
    cost?: number,
    type: CityPopupType,
    haveToDo: boolean,
    player: ICharacter,
    city: ICity,
}

export type CityPopupType = "upgrade-city" | "buy-city" | "pay-tax"