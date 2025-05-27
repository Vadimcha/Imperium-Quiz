import { FC, memo } from "react";
import styles from "../city-popup/city-popup.module.scss";
import useCitiesStore from "../../store/citiesStore.ts";
import { BasePopup } from "../base-popup";
import { Button } from "react-untitled-ui";


export const CityPopup: FC = memo(() => {
    const { cityPopup, payTax, upgrade, buy, setPopup } = useCitiesStore()
    
    return <BasePopup
        visible={ !!cityPopup }
        toggle={ () => {
        } }>
        <div className={ styles.cityContainer }>
            <div className={ styles.container }>
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        { cityPopup?.title }
                    </h3>
                    <p className={styles.description}>
                        { cityPopup?.message }
                    </p>
                    {
                        cityPopup?.haveToDo == true
                            ? <Button onClick={() => {
                                payTax(cityPopup.city.id, cityPopup.player)
                                setPopup(undefined)
                            }}>
                                Хорошо
                            </Button>
                            : <div className={styles.buttonContainer}>
                                {
                                    cityPopup?.type == "upgrade-city" && <Button 
                                        onClick={() => { 
                                            upgrade(cityPopup.city.id)
                                            setPopup(undefined)
                                        }}>
                                        Улучшить город
                                    </Button>
                                }
                                {
                                    cityPopup?.type == "buy-city" && <Button
                                        onClick={() => { 
                                            buy(cityPopup.city.id, cityPopup.player)
                                            setPopup(undefined)
                                        }}>
                                        Купить город
                                    </Button>
                                }
                                <Button
                                    variant="secondary"
                                    onClick={() => setPopup(undefined)}>
                                    Отказаться
                                </Button>
                            </div>
                    }
                </div>
            </div>
        </div>
    </BasePopup>
})