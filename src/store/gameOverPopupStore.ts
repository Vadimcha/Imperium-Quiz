import { create } from "zustand/index";
import {ICharacter} from "../data/characters.ts";
import playersStore from "./playersStore.ts";

export interface IGameOverPopup {
  player: undefined | ICharacter,
  isVisible: boolean,
  showPopup: (playerI_id: number) => void,
  closePopup: () => void,
}

const useGameOverPopup =  create<IGameOverPopup>()((set) => ({
  player: undefined,
  isVisible: false,
  showPopup: (player_id: number) => {
    const players = playersStore.getState().players;
    const currentPlayer = players.find((p) => p.id == player_id);
    set({ isVisible: true, player: currentPlayer })
  },
  closePopup: () => {
    set({
      player: undefined,
      isVisible: false,
    })
  }
}))

export default useGameOverPopup;