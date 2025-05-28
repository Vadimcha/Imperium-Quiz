import { ICity, ICityPopup } from "../domain/city.ts";
import { create } from "zustand/index";
import { INITIAL_CITIES } from "../data/cities.ts";
import { ICharacter } from "../data/characters.ts";
import usePlayersStore from "./playersStore.ts";
import { QuizType } from "../domain/quiz.ts";
import { useMoneyAnimation } from "../utils/animations/money/money-animation.tsx";
import useGameStore from "./gameStore.ts";

export interface ICitiesStore {
    cities: ICity[],
    cityPopup?: ICityPopup,
    cityDetailPopup?: ICity,
    buy: (cityId: number, player: ICharacter) => void,
    payTax: (cityId: number, player: ICharacter) => void,
    upgrade: (cityId: number) => void,
    setPopup: (popup: ICityPopup | undefined) => void,
    setDetailPopup: (cityId: number | undefined) => void,
}

const useCitiesStore =  create<ICitiesStore>()((set, getState) => ({
    cities: INITIAL_CITIES,
    cityPopup: undefined,
    cityDetailPopup: undefined,
    buy: (cityId, player) => {
        const city = getState().cities.find(x => x.id == cityId)!
        if (city.ownerId == null && player.money >= city.price) {
            set({
                cities: getState().cities.map(city => { 
                    if (city.id == cityId) {
                        return {
                            ...city,
                            ownerId: player.id,
                        }
                    } else {
                        return city
                    }
                })
            })
            usePlayersStore.getState().changePlayersMoney(
                player.id,
                -city.price,
            )
        }
    },
    payTax: (cityId, player) => {
        const city = getState().cities.find(x => x.id == cityId)!
        const taxToPay = city.levels[city.currentLevel].tax
        if (city.ownerId != null) {
            if (player.money < taxToPay) {
                usePlayersStore.getState().playerLoose(player.id)
            } else {
                usePlayersStore.getState().changePlayersMoney(
                    player.id,
                    -taxToPay,
                )
                usePlayersStore.getState().changePlayersMoney(
                    city.ownerId,
                    taxToPay
                )
                useMoneyAnimation.getState().play()
            }
        }
    },
    upgrade: (cityId) => {
        const city = getState().cities.find(x => x.id == cityId)!
        const level = city.levels[city.currentLevel]
        const owner = usePlayersStore.getState().players.find(x => x.id == city.id)
        if (owner != null && level.priceToNextLevel != null && owner.money >= level.priceToNextLevel) {
            set({
                cities: getState().cities.map(city => {
                    if (city.id == cityId) {
                        return {
                            ...city,
                            currentLevel: city.currentLevel + 1
                        }
                    } else {
                        return city
                    }
                })
            })
            usePlayersStore.getState().changePlayersMoney(owner.id, -level.priceToNextLevel)
        }
    },
    setPopup: (popup) => {
        set({ cityPopup: popup })
        if (popup == null) {
            useGameStore.getState().setNextPlayerMove();
        }
    },
    setDetailPopup: (cityId) => {
        set({
            cityDetailPopup: getState().cities.find(x => x.id == cityId)
        })
    } 
}))

export default useCitiesStore

export function getCityQuizType(city: ICity, player: ICharacter): QuizType {
    if (city.ownerId == player.id && city.levels[city.currentLevel].priceToNextLevel) {
        return "can-upgrade-city"
    }
    if (city.ownerId != null && city.ownerId != player.id) { 
        return "should-pay-tax"
    }
    if (city.ownerId == null) {
        return "can-buy-city"
    }
    return "just-chilling"
}

export function calculateSumEveryRound(playerId: number): number {
    return useCitiesStore.getState().cities.reduce(
        (current, x) => {
            if (x.ownerId == playerId) {
                return current + x.levels[x.currentLevel].moneyEveryRound
            }
            return current
        },
        0
    )
}

export function getOwner(cityId: number | undefined): ICharacter | undefined {
    const players = usePlayersStore.getState().players
    const cities = useCitiesStore.getState().cities
    const city = cities.find(x => x.id == cityId)
    return players.find(x => x.id == city?.ownerId)
}