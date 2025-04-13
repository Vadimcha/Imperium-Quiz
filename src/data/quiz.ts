import { Quiz, QuizResultMessage } from "../domain/quiz.ts";

export const QUIZZES: Quiz[] = [
    {
        name: "тестовый квиз",
        questions: [
            {
                id: 1,
                question: "Сосал?",
                answers: [
                    {
                        id: 1,
                        content: "да",
                        isCorrect: true,
                    },
                    {
                        id: 2,
                        content: "нет",
                        isCorrect: false,
                    },
                    {
                        id: 3,
                        content: "не помню",
                        isCorrect: false,
                    }
                ]
            },
            {
                id: 2,
                question: "2 + 2",
                answers: [
                    {
                        id: 1,
                        content: "0",
                        isCorrect: false,
                    },
                    {
                        id: 2,
                        content: "4",
                        isCorrect: true,
                    },
                    {
                        id: 3,
                        content: "много",
                        isCorrect: true,
                    },
                    {
                        id: 4,
                        content: "1941 - 1945",
                        isCorrect: false,
                    }
                ]
            },
            {
                id: 3,
                question: "Как часто вы думаете о римской империи?",
                answers: [
                    {
                        id: 1,
                        content: "дважды в день",
                        isCorrect: true,
                    },
                    {
                        id: 2,
                        content: "не часто",
                        isCorrect: false,
                    },
                    {
                        id: 3,
                        content: "не так часто, как хотелось бы",
                        isCorrect: false,
                    },
                ]
            }
        ]
    }
]

export const QUIZ_RESULT_MESSAGE: QuizResultMessage = {
    loseMessage: "Вы проиграли квиз!\nТеперь вы заплатите 100 монет игроку 2😈", 
    winMessage: "Вы выиграли!\nПлатить ничего не надо😇"

}