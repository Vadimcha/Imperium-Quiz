import { create } from "zustand";
import {positions} from "../components/cells/positions.ts";
import useQuizStore from "./quizStore.ts";
import { QUIZ_RESULT_MESSAGE } from "../data/quiz.ts";
import playersStore, { getCurrentPlayer } from "./playersStore.ts";
import {Quiz} from "../domain/quiz.ts";
import {getQuestions} from "../utils/getQuestions.ts";
import { IMove, movesData } from "../data/moves.ts";
import { calculateSumEveryRound, getCityQuizType } from "./citiesStore.ts";
import { ICity } from "../domain/city.ts";
import { useMoneyAnimation } from "../utils/animations/money/money-animation.tsx";
import usePlayersStore from "./playersStore.ts";
import { startBattle } from "./battleStore.ts";

export type processType = 'wait' | 'move'

interface GameState {
  activePlayer: number,
  move: number,
  process: processType,
  nextMove: () => void,
  cubicValue: number | null,
  setNextPlayerMove: () => void,
}

const useGameStore = create<GameState>()((set, getState) => ({
  activePlayer: 0,
  move: 0,
  process: 'wait',
  cubicValue: null,
  nextMove: async () => {
    set({ process: "move" })
    // бросок кубика
    const nextMove = Math.ceil(Math.random() * 6)
    set(() => ({ cubicValue: nextMove }))
    await new Promise(resolve => setTimeout(resolve, 3750));
    set(() => ({ cubicValue: null }))
    
    const player = getCurrentPlayer()
    
    // перемещаемся на следующую позицию
    for (let i = 1; i <= nextMove; i++) {
      const nextPosition = (player.position + i) % positions.length 
      usePlayersStore.getState().movePlayer(player.id, nextPosition)
      
      // прошли круг
      if (nextPosition == 0) {
        playersStore.getState().changePlayersMoney(player.id, calculateSumEveryRound(player.id))
        useMoneyAnimation.getState().play()
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    set({ process: "wait" })
    // смотрим куда попали
    const currentCell = getCurrentPlayerMove()
    console.log(currentCell)
    if (currentCell.type == "city") {
      const quiz: Quiz = {
        name: "город",
        questions: getQuestions(),
        type: getCityQuizType(currentCell as ICity, getCurrentPlayer())
      }
      useQuizStore.getState().setQuiz(quiz, QUIZ_RESULT_MESSAGE)
    } else if (currentCell.type == "battle") {
      startBattle((player.position + nextMove) % positions.length)
    } else {
      // отдаем ход следующему игроку
      getState().setNextPlayerMove()
    }
  },
  setNextPlayerMove: () => {
    const playersAmount = usePlayersStore.getState().players.length
    set({ activePlayer: (getState().activePlayer + 1) % playersAmount })
  }
}))

export function getCurrentPlayerMove(): IMove {
  const position = getCurrentPlayer().position
  return movesData[position]!
}


export default useGameStore;