import { create } from "zustand";
import {positions} from "../components/cells/positions.ts";

export type processType = 'wait' | 'move'

interface GameState {
  move: number,
  process: processType,
  nextMove: () => void,
  changeProcess: (value: processType) => void,
}

const useGameStore = create<GameState>()((set, getState) => ({
  move: 0,
  process: 'wait',
  nextMove: () => {
    set((state) => ({
      ...state,
      move: (getState().move + 1) % positions.length,
    }))
  },
  changeProcess: (value: processType) => {
    set((state) => ({
      ...state,
      process: value
    }))
  }
}))

export default useGameStore;