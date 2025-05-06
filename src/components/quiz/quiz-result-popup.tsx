import {FC, memo, useEffect, useRef, useState} from "react";
import styles from "./quiz.module.scss";
import { QuizResult } from "../../domain/quiz.ts";
import classNames from "classnames";
import Lottie from "lottie-react";
import confetti from "../../assets/confetti.json"
import { useMoneyAnimation } from "../../utils/animations/money/money-animation.tsx";
import usePlayersStore from "../../store/playersStore.ts";
import useGameStore from "../../store/gameStore.ts";

export type QuizResultProps = {
    result: QuizResult,
    onClick: () => void,
}

export const QuizResultPopup: FC<QuizResultProps> = memo(props => {
    const money = useMoneyAnimation();
    const { changePlayersMoney } = usePlayersStore();
    const { activePlayer } = useGameStore();

    const [showConfetti, setShowConfetti] = useState(false)
    const hasPlayedRef = useRef(false)

    useEffect(() => {
        if (props.result.isWin && !hasPlayedRef.current) {
            changePlayersMoney(activePlayer, 1000);
            money.play();
            setShowConfetti(true)
            hasPlayedRef.current = true
        }
    }, [props.result.isWin, money])


    return <div className={ styles.quizResult }>
        <h3
            className={ classNames(
                styles.score,
                {
                    [styles.win]: props.result.isWin,
                    [styles.lose]: !props.result.isWin,
                }
            ) }
        >
            { props.result.score }
        </h3>
        <p className={ styles.message }>{ props.result.message }</p>
        <div
            className={ styles.button }
            onClick={ () => props.onClick() }>
            Завершить
        </div>
        {showConfetti && (
            <Lottie
                animationData={confetti}
                autoplay
                loop={false}
                className={styles.confetti}
            />
        )}
    </div>
})