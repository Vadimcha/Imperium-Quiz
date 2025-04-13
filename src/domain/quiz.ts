export type Quiz = {
    name: string,
    questions: QuizQuestion[]
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

export type QuizResultMessage = {
    winMessage: string,
    loseMessage: string,
}

