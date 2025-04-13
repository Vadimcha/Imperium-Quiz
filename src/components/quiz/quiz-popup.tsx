import { FC, memo } from "react";
import { BasePopup } from "../base-popup";
import useQuizStore, { getCurrentQuestion } from "../../store/quizStore.ts";
import styles from "./quiz.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { QuizResultPopup } from "./quiz-result-popup.tsx";

export type QuizProps = {}

export const QuizPopup: FC<QuizProps> = memo(() => {
    const store = useQuizStore()
    const currentQuestion = getCurrentQuestion(store)

    return <BasePopup
        visible={ store.quiz != null }
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
                                        onClick={ () => store.setAnswer(answer) }>
                                        <div className={ styles.text }>{ answer.content }</div>
                                        {
                                            store.currentAnswerId == answer.id && <img
                                                src="/tick.webp"
                                                className={ styles.tick }/>
                                        }
                                    </div>
                                )) }
                            </div>
                            <AnimatePresence mode="wait">
                                {
                                    store.currentAnswerId && <motion.div
                                        initial={ {opacity: 0, y: 10} }
                                        animate={ {opacity: 1, y: 0} }
                                        exit={ {opacity: 0, y: 10} }
                                        transition={ {duration: 0.1} }
                                        className={ styles.button }
                                        onClick={ () => store.moveNext() }>

                                        Ответить
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </motion.div>
                    ) }
                </AnimatePresence>
                <AnimatePresence mode={ "wait" }>
                    {
                        store.quizResult && <motion.div
                        style={{ position: 'absolute', width: '100%', height: '100%', top: 36, bottom: 36, left: 0 }}
                            initial={ {opacity: 0, x: 50} }
                            animate={ {opacity: 1, x: 0} }
                            exit={ {opacity: 0, x: -50} }
                            transition={ {duration: 0.3} }
                        >
                            <QuizResultPopup
                                result={ store.quizResult }
                                onClick={ store.finish }/>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    </BasePopup>
})
