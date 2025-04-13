import { create } from "zustand";
import {positions} from "../components/cells/positions.ts";
import useQuizStore from "./quizStore.ts";
import { QUIZ_RESULT_MESSAGE, QUIZZES } from "../data/quiz.ts";

export type processType = 'wait' | 'move'

interface GameState {
  move: number,
  process: processType,
  nextMove: () => void,
  changeProcess: (value: processType) => void,
  cubicValue: number | null,
}

const useGameStore = create<GameState>()((set, getState) => ({
  move: 0,
  process: 'wait',
  cubicValue: null,
  nextMove: async () => {
    const nextMove = Math.ceil(Math.random() * 6)
    set(() => ({ cubicValue: nextMove }))
    await new Promise(resolve => setTimeout(resolve, 3750));
    set(() => ({ cubicValue: null }))
    
    for (let i = 0; i < nextMove; i++) {
      set((state) => ({
        ...state,
        move: (getState().move + 1) % positions.length,
      }))
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // TODO: смотреть на тип ячейки в которую попали и открывать нужный квиз
    useQuizStore.getState().setQuiz(QUIZZES[0], QUIZ_RESULT_MESSAGE)
  },
  changeProcess: (value: processType) => {
    set((state) => ({
      ...state,
      process: value
    }))
  }
}))

export default useGameStore;