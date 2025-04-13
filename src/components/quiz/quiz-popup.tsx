import { FC, memo } from "react";
import { BasePopup } from "../base-popup";
import useQuizStore, { getCurrentQuestion } from "../../store/quizStore.ts";
import styles from "./quiz.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { QuizResultPopup } from "./quiz-result-popup.tsx";
import useGameStore from "../../store/gameStore.ts";

export type QuizProps = {}

export const QuizPopup: FC<QuizProps> = memo(() => {
    const quizStore = useQuizStore()
    const gameStore = useGameStore()
    const currentQuestion = getCurrentQuestion(quizStore)

    const onFinish = () => {
        quizStore.finish();
        gameStore.setActivePlayer();
    }

    return <BasePopup
        visible={ quizStore.quiz != null }
        toggle={ () => {
        } }>
        <div className={ styles.quizContainer }>
            <div className={ styles.container }>
                <AnimatePresence mode="wait">
                    { currentQuestion && (
                        <motion.div
                            key={ currentQuestion.id }
                            initial={ {opacity: 0, x: 50} }
                            animate={ {opacity: 1, x: 0} }
                            exit={ {opacity: 0, x: -50} }
                            transition={ {duration: 0.3} }
                            className={ styles.content }
                        >
                            <p className={ styles.title }>
                                { currentQuestion.question }
                            </p>

                            { currentQuestion.imageUrl && (
                                <img
                                    src={ currentQuestion.imageUrl }
                                    alt="question"
                                    className={ styles.questionImage }
                                />
                            ) }

                            <div className={ styles.answersList }>
                                { currentQuestion.answers.map((answer) => (
                                    <div
                                        key={ answer.id }
                                        className={ styles.answer }
                                        onClick={ () => quizStore.setAnswer(answer) }>
                                        <div className={ styles.text }>{ answer.content }</div>
                                        {
                                            quizStore.currentAnswerId == answer.id && <img
                                                src="/tick.webp"
                                                className={ styles.tick }/>
                                        }
                                    </div>
                                )) }
                            </div>
                            <AnimatePresence mode="wait">
                                {
                                    quizStore.currentAnswerId && <motion.div
                                        initial={ {opacity: 0, y: 10} }
                                        animate={ {opacity: 1, y: 0} }
                                        exit={ {opacity: 0, y: 10} }
                                        transition={ {duration: 0.1} }
                                        className={ styles.button }
                                        onClick={ () => quizStore.moveNext() }>

                                        Ответить
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </motion.div>
                    ) }
                </AnimatePresence>
                <AnimatePresence mode={ "wait" }>
                    {
                        quizStore.quizResult && <motion.div
                        style={{ position: 'absolute', width: '100%', height: '100%', top: 36, bottom: 36, left: 0 }}
                            initial={ {opacity: 0, x: 50} }
                            animate={ {opacity: 1, x: 0} }
                            exit={ {opacity: 0, x: -50} }
                            transition={ {duration: 0.3} }
                        >
                            <QuizResultPopup
                                result={ quizStore.quizResult }
                                onClick={ onFinish }
                            />
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    </BasePopup>
})
