import { FC, Fragment, memo } from "react";
import styles from "./city-detail-popup.module.scss";
import { BasePopup } from "../base-popup";
import useCitiesStore, { getOwner } from "../../store/citiesStore.ts";
import { Button } from "react-untitled-ui";


export const CityDetailPopup: FC = memo(() => {
    const { cityDetailPopup, setDetailPopup } = useCitiesStore()
    const cityOwner = getOwner(cityDetailPopup?.id)
    
    return <BasePopup
        visible={ !!cityDetailPopup }
        toggle={ () => setDetailPopup(undefined) }>
        <div className={ styles.cityContainer }>
            <div className={ styles.container }>
                <div className={ styles.content }>
                    <img className={ styles.image } src={ cityDetailPopup?.img }/>
                    <div className={ styles.infoContainer }>
                        <div className={ styles.infoTile }>
                            <div className={ styles.key }>Стоимость:</div>
                            <div className={ styles.value }>{ cityDetailPopup?.price }</div>
                        </div>
                        <div className={ styles.infoTile }>
                            <div className={ styles.key }>Владелец:</div>
                            <div className={ styles.value }>{ cityOwner?.name ?? "Никому не принадлежит" }</div>
                        </div>
                        <div className={ styles.infoTile }>
                            <div className={ styles.key }>Уровень:</div>
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/* @ts-expect-error */}
                            <div className={ styles.value }>{ cityDetailPopup?.currentLevel + 1 }</div>
                        </div>
                    </div>
                    <div className={ styles.levels }>
                        <div className={ styles.header }>Уровень</div>
                        <div className={ styles.header }>Налог</div>
                        <div className={ styles.header }>Приносит<br/>за круг</div>
                        <div className={ styles.header }>След. Уровень</div>
                        {
                            cityDetailPopup?.levels?.map(level => {
                                return <Fragment>
                                    <div>{ level.level }</div>
                                    <div>{ level.tax }</div>
                                    <div>{ level.moneyEveryRound }</div>
                                    <div>{ level.priceToNextLevel }</div>
                                </Fragment>
                            })
                        }
                    </div>
                    <Button
                        className={ styles.button }
                        onClick={ () => setDetailPopup(undefined) }>
                        Ясно
                    </Button>
                </div>
            </div>
        </div>
    </BasePopup>
})