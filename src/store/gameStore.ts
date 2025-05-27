import { create } from "zustand";
import {positions} from "../components/cells/positions.ts";
import useQuizStore from "./quizStore.ts";
import { QUIZ_RESULT_MESSAGE } from "../data/quiz.ts";
import playersStore, { getCurrentPlayer } from "./playersStore.ts";
import {PLAYER_COUNT} from "../utils";
import {Quiz} from "../domain/quiz.ts";
import {getQuestions} from "../utils/getQuestions.ts";
import { IMove, movesData } from "../data/moves.ts";
import { getCityQuizType } from "./citiesStore.ts";
import { ICity } from "../domain/city.ts";

export type processType = 'wait' | 'move'

interface GameState {
  activePlayer: number,
  move: number,
  process: processType,
  nextMove: () => void,
  changeProcess: (value: processType) => void,
  cubicValue: number | null,
  setActivePlayer: (playerId?: number) => void,
}

const useGameStore = create<GameState>()((set, getState) => ({
  activePlayer: 0,
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
        move: (getState().move + 1 + positions.length) % positions.length,
      }))
      playersStore.getState().movePlayer(getState().activePlayer, 1);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    const currentCell = getCurrentMove()
    console.log(currentCell)
    if (currentCell.type == "city") {
      // TODO: смотреть на тип ячейки в которую попали и открывать нужный квиз
      const quiz: Quiz = {
        name: "тестовый квиз",
        questions: getQuestions(),
        type: getCityQuizType(currentCell as ICity, getCurrentPlayer())
      }
      useQuizStore.getState().setQuiz(quiz, QUIZ_RESULT_MESSAGE)
    }
  },
  changeProcess: (value: processType) => {
    set((state) => ({
      ...state,
      process: value
    }))
  },
  setActivePlayer: (playerId?: number) => {
    set(() => ({
      activePlayer: playerId || (getState().activePlayer + 1 + PLAYER_COUNT) % PLAYER_COUNT
    }))
  },
}))

export function getCurrentMove(): IMove {
  const moveId = useGameStore.getState().move
  return movesData[moveId]!
}

export default useGameStore;