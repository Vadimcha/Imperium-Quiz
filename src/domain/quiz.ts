import useGameStore, { getCurrentPlayerMove } from "../store/gameStore.ts";
import useQuizStore from "../store/quizStore.ts";
import usePlayersStore from "../store/playersStore.ts";
import useCitiesStore from "../store/citiesStore.ts";
import { ICity } from "./city.ts";

export type Quiz = {
    name: string,
    questions: QuizQuestion[],
    type: QuizType,
}

export type QuizQuestion = {
    id: number,
    question: string,
    imageUrl?: string,
    answers: QuizQuestionAnswer[],
    timeToAnswer?: number
}

export type QuizQuestionAnswer = {
    id: number,
    content: string,
    isCorrect: boolean,
}

export type QuizResult = {
    score: string,
    message: string,
    isWin: boolean,
}

export type QuizType = "can-buy-city" | "can-upgrade-city" | "just-chilling" | "should-pay-tax"

export type QuizResultMessage = {
    winMessage: string,
    loseMessage: string,
}

export function handleQuizFinish() {
    const gameStore = useGameStore.getState()
    const playerStore = usePlayersStore.getState()
    const quizStore = useQuizStore.getState()
    const citiesStore = useCitiesStore.getState()
    let shouldSetNextMove = true
    
    const quiz = quizStore.quiz!
    const isWin = quizStore.quizResult!.isWin
    const player = playerStore.players[gameStore.activePlayer]
    
    if (quiz.type == "can-upgrade-city") {
        const city = getCurrentPlayerMove() as ICity
        const nextLevel = city.levels[city.currentLevel + 1]
        const price = nextLevel.priceToNextLevel
        if (isWin && price && player.money >= price && city.ownerId == player.id) {
            citiesStore.setPopup({
                title: `Вы можете прокачать свой город до ${nextLevel.level} уровня`,
                message: `Это будет стоить ${nextLevel.priceToNextLevel} 💰, ` +
                    `а налог для наступивших сюда игроков составит ${nextLevel.tax} 💰`,
                cost: price,
                type: "upgrade-city",
                haveToDo: false,
                city: city,
                player: player,
            })
            shouldSetNextMove = false
        }
    }
    
    if (quiz.type == "can-buy-city") {
        const city = getCurrentPlayerMove() as ICity
        const price = city.price
        if (isWin && price && player.money >= price) {
            citiesStore.setPopup({
                title: "Вы можете купить этот город",
                message: `Это будет стоить ${price} 💰, а налог для наступивших игроков составит ${city.levels[0].tax} 💰`,
                cost: price,
                type: "buy-city",
                haveToDo: false,
                city: city,
                player: player,
            })
            shouldSetNextMove = false
        }
    }

    if (quiz.type == "should-pay-tax") {
        const city = getCurrentPlayerMove() as ICity
        const tax = city.levels[city.currentLevel].tax
        const owner = playerStore.players.find(x => x.id == city.ownerId)!
        if (!isWin && tax && player.money >= tax) {
            citiesStore.setPopup({
                title: "Вы должны заплатить налог",
                message: `Это будет стоить ${tax} 💰. Налог получит игрок ${owner.name}`,
                cost: tax,
                type: "pay-tax",
                haveToDo: true,
                city: city,
                player: player,
            })
            shouldSetNextMove = false
        } else if (!isWin && tax && player.money < tax) {
            playerStore.playerLoose(player.id)
        }
    }

    quizStore.finish();
    if (shouldSetNextMove) {
        gameStore.setNextPlayerMove();
    }
}
