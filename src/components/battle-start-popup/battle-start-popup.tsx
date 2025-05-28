import { FC, Fragment, memo } from "react";
import styles from "./battle-start-popup.module.scss"
import { BasePopup } from "../base-popup";
import useBattleStore from "../../store/battleStore.ts";
import { AnimatePresence, motion } from "framer-motion";

export const BattleStartPopup: FC = memo(() => {
    const {battleStartPopup} = useBattleStore()

    return <BasePopup
        visible={ !!battleStartPopup }
        toggle={ () => {
        } }>
        <div className={ styles.battleContainer }>
            <div className={ styles.container }>
                <div className={ styles.content }>
                    <AnimatePresence mode="wait">
                        {
                            battleStartPopup?.whoStart == undefined
                                ? <Fragment>
                                    <motion.div
                                        initial={ {opacity: 0, x: '50px'} }
                                        animate={ {opacity: 1, x: '0px'} }
                                        transition={ {delay: 0.3, duration: 1} }
                                        className={ styles.playerName }>
                                        { battleStartPopup?.player1Name }
                                    </motion.div>
                                    <motion.div
                                        initial={ {opacity: 0, scale: 0.5} }
                                        animate={ {opacity: 1, scale: 1} }
                                        transition={ {delay: 0.3, duration: 1} }
                                        className={ styles.vs }>
                                        <img src="/vs.png"/>
                                    </motion.div>
                                    <motion.div
                                        initial={ {opacity: 0, x: '-50px'} }
                                        animate={ {opacity: 1, x: '0px'} }
                                        transition={ {delay: 0.3, duration: 1} }
                                        className={ styles.playerName }>
                                        { battleStartPopup?.player2Name }
                                    </motion.div>
                                </Fragment>
                                : <Fragment>
                                    <motion.div
                                        initial={ {opacity: '0', scale: 0} }
                                        animate={ {opacity: '1', scale: 1} }
                                        transition={ {delay: 0.3, duration: 0.7} }
                                        className={ styles.whoStart }>
                                        { battleStartPopup?.whoStart }
                                    </motion.div>
                                </Fragment>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </BasePopup>
})