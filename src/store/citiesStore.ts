import { ICity, ICityPopup } from "../domain/city.ts";
import { create } from "zustand/index";
import { INITIAL_CITIES } from "../data/cities.ts";
import { ICharacter } from "../data/characters.ts";
import usePlayersStore from "./playersStore.ts";

export interface ICitiesStore {
    cities: ICity[],
    cityPopup?: ICityPopup, 
    buy: (cityId: number, player: ICharacter) => void,
    payTax: (cityId: number, player: ICharacter) => void,
    upgrade: (cityId: number) => void,
    setPopup: (popup: ICityPopup | undefined) => void, 
}

const useCitiesStore =  create<ICitiesStore>()((set, getState) => ({
    cities: INITIAL_CITIES,
    cityPopup: undefined,
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
    },
}))

export default useCitiesStore