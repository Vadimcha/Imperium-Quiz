import { FC, Fragment, memo } from "react";
import styles from "./battle-result-popup.module.scss";
import { BasePopup } from "../base-popup";
import useBattleStore from "../../store/battleStore.ts";
import { BATTLE_MONEY } from "../../domain/battle.ts";
import { Button } from "react-untitled-ui";


export const BattleResultPopup: FC = memo(() => {
    const { battleResultPopup, finish } = useBattleStore()
    
    return <BasePopup
        visible={ !!battleResultPopup }
        toggle={ () => {
        } }>
        <div className={ styles.battleContainer }>
            <div className={ styles.container }>
                <div className={ styles.content }>
                    <h3 className={styles.title}>
                        {
                            battleResultPopup?.isDraw
                                ? "Ничья!"
                                : `Победил ${battleResultPopup?.winner.name}`
                        }
                    </h3>
                    <div className={styles.subtitle}>
                        {
                            battleResultPopup?.isDraw
                                ? "Никто никому ничего не должен"
                                : <Fragment>
                                    Игрок <strong>{ battleResultPopup?.loser.name}</strong><br/> 
                                    должен ему { BATTLE_MONEY } 💰
                                </Fragment>
                        }
                    </div>
                    <Button onClick={ finish }>
                        Понятно
                    </Button>
                </div>
            </div>
        </div>
    </BasePopup>
})