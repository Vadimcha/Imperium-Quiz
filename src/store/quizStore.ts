import { create } from "zustand";
import { Quiz, QuizQuestionAnswer, QuizResult, QuizResultMessage } from "../domain/quiz.ts";


interface QuizState {
    quiz: Quiz | null,
    currentQuestionId: number | null,
    currentAnswerId: number | null,
    correctCount: number,
    quizResult: QuizResult | null,
    resultMessage: QuizResultMessage | null,
    setAnswer: (answer: QuizQuestionAnswer) => void,
    moveNext: () => void,
    setQuiz: (quiz: Quiz, message: QuizResultMessage) => void,
    finish: () => void,
}

const useQuizStore = create<QuizState>()(
    (set, getState) => ({
    quiz: null,
    currentQuestionId: null,
    currentAnswerId: null,
    correctCount: 0,
    quizResult: null,
    resultMessage: null,
    setAnswer: (answer: QuizQuestionAnswer) => {
        set(() => ({ currentAnswerId: answer.id }))
    },
    moveNext: () => {
        const state = getState()
        if (state.quiz == null || state.currentQuestionId == null || state.currentAnswerId == null) return;
        
        const isLastQuestion = state.quiz.questions
            .findIndex(q => q.id == state.currentQuestionId) == state.quiz.questions.length - 1
        const isCorrectAnswer = getCurrentAnswer(state)?.isCorrect == true
        
        if (isLastQuestion && state.resultMessage != null) {
            const correctCount = isCorrectAnswer ? state.correctCount + 1 : state.correctCount 
            const isWinner = correctCount == state.quiz.questions.length
            const message = isWinner ? state.resultMessage.winMessage : state.resultMessage.loseMessage
            const score = `${correctCount} из ${state.quiz.questions.length}`
            
            set(() => ({
                currentQuestionId: null,
                currentAnswerId: null,
                quizResult: {
                    score: score,
                    isWin: isWinner,
                    message: message,
                }
            }))
        } else {
            set(state => ({
                currentQuestionId: getNextQuestion(state)?.id,
                currentAnswerId: null,
                correctCount: isCorrectAnswer ? state.correctCount + 1 : state.correctCount
            }))
        }
    },
    setQuiz: (quiz: Quiz, message: QuizResultMessage) => {
        set(() => ({ 
            quiz,
            currentQuestionId: quiz.questions[0].id,
            resultMessage: message,
        }))
    },
    finish: () => set(() => ({
        quiz: null,
        quizResult: null,
        resultMessage: null,
        correctCount: 0,
    }))
}))

const getNextQuestion = (state: QuizState) => {
    if (state.quiz == null || state.currentQuestionId == null) return null;
    const currentQuestionIndex = state.quiz.questions.findIndex(q => q.id == state.currentQuestionId)
    console.log( state.quiz.questions[currentQuestionIndex + 1])
    return state.quiz.questions[currentQuestionIndex + 1]
}

const getCurrentAnswer = (state: QuizState) => {
    if (state.quiz == null || state.currentQuestionId == null || state.currentAnswerId == null) return null;
    return state.quiz.questions
        .find(q => q.id == state.currentQuestionId)!
        .answers
        .find(q => q.id == state.currentAnswerId)
}

export const getCurrentQuestion = (state: QuizState) => {
    return state?.quiz?.questions.find(q => q.id == state.currentQuestionId)
}

export default useQuizStore;