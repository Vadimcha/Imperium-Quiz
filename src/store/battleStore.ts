import { BATTLE_MONEY, IBattle, IBattleResultPopup, IBattleStartPopup } from "../domain/battle.ts";
import { create } from "zustand/index";
import { ICharacter } from "../data/characters.ts";
import { Quiz, QuizResult } from "../domain/quiz.ts";
import useQuizStore from "./quizStore.ts";
import { getQuestions } from "../utils/getQuestions.ts";
import usePlayersStore from "./playersStore.ts";
import useGameStore from "./gameStore.ts";
import playersStore from "./playersStore.ts";
import { useMoneyAnimation } from "../utils/animations/money/money-animation.tsx";

export interface IBattleStore {
    battle?: IBattle,
    battleResultPopup?: IBattleResultPopup,
    battleStartPopup?: IBattleStartPopup,
    startBattle: (player1: ICharacter, player2: ICharacter) => void,
    handleQuizResult: (result: QuizResult) => void,
    finish: () => void,
}

const useBattleStore = create<IBattleStore>()((set, getState) => ({
    battle: undefined,
    startBattle: async (player1, player2) => {
        set({ 
            battleStartPopup: {
                player1Name: player1.name,
                player2Name: player2.name,
                whoStart: undefined,
            } 
        })
        await new Promise(resolve => setTimeout(resolve, 4000));
        set({
            battleStartPopup: {
                player1Name: player1.name,
                player2Name: player2.name,
                whoStart: `Начинает\n${player1.name}`,
            }
        })
        await new Promise(resolve => setTimeout(resolve, 2000));
        set({ battleStartPopup: undefined })
        
        
        set({ battle: { player1, player2 } })
        const quiz: Quiz = {
            name: "Battle игрока 1",
            questions: getQuestions(100),
            type: "battle"
        }
        useQuizStore.getState().setQuiz(quiz, {
            loseMessage: `Неплохой результат, посмотрим что покажет ${player2.name}`,
            winMessage: ``
        })
    },
    handleQuizResult: async (result) => {
        const battle = getState().battle
        if (!battle) return
        
        if (!battle.result1) {
            // первый игрок закончил
            set({ 
                battle: {
                    ...battle,
                    result1: {
                        score: result.correctCount,
                    }
                },
                battleStartPopup: {
                    player1Name: "",
                    player2Name: "",
                    whoStart: `А теперь\n${battle.player2.name}`,
                }
            })
            await new Promise(resolve => setTimeout(resolve, 3000));
            set({ battleStartPopup: undefined })
            
            const quiz: Quiz = {
                name: "Battle игрока 2",
                questions: getQuestions(100),
                type: "battle"
            }
            useQuizStore.getState().setQuiz(quiz, {
                loseMessage: `Отлично! Посмотрим на результат!`, 
                winMessage: ``
            })
        } else {
            // второй игрок закончил
            if (result.correctCount > battle.result1.score) {
                set({
                    battleResultPopup: {
                        winner: battle.player2,
                        loser: battle.player1,
                        resultWinner: { score: result.correctCount },
                        resultLooser: battle.result1,
                        isDraw: false,
                    },
                })
            } else if (result.correctCount < battle.result1.score) {
                set({
                    battleResultPopup: {
                        winner: battle.player1,
                        loser: battle.player2,
                        resultWinner: battle.result1,
                        resultLooser: { score: result.correctCount },
                        isDraw: false,
                    },
                })
            } else {
                set({
                    battleResultPopup: {
                        winner: battle.player1,
                        loser: battle.player2,
                        resultWinner: battle.result1,
                        resultLooser: { score: result.correctCount },
                        isDraw: true,
                    },
                })
            }
            console.log(getState().battleResultPopup)
        }
    },
    finish: () => {
        const result = getState().battleResultPopup!
        if (!result.isDraw) {
            playersStore.getState().changePlayersMoney(result.winner.id, BATTLE_MONEY)
            playersStore.getState().changePlayersMoney(result.loser.id, -BATTLE_MONEY)
            useMoneyAnimation.getState().play()
        }
        useGameStore.getState().setNextPlayerMove()
        set({ battle: undefined, battleResultPopup: undefined })
    }
}))

export default useBattleStore

export function startBattle(position: number) {
    const playersOnThisCell = usePlayersStore.getState().players.filter(x => x.position == position)
    
    if (playersOnThisCell.length >= 2) {
        const player1 = playersOnThisCell[playersOnThisCell.length - 1]    
        const player2 = playersOnThisCell[playersOnThisCell.length - 2]
        useBattleStore.getState().startBattle(player1, player2)
    } else {
        useGameStore.getState().setNextPlayerMove()
    }
}