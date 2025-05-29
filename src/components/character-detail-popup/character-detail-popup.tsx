import {FC, memo, } from "react";
import { BasePopup } from "../base-popup";
import { Button } from "react-untitled-ui";
import useCharacterDetailPopup from "../../store/characterDetailPopupStore.ts";
import s from './character-detail-popup.module.scss'
import useCitiesStore, {calculateSumEveryRound} from "../../store/citiesStore.ts";
import {ICity} from "../../domain/city.ts";

export const CharacterDetailPopup: FC = memo(() => {
  const { player, isVisible, closePopup } = useCharacterDetailPopup()
  const { cities } = useCitiesStore()

  const renderCities = () => {
    return cities.map((city: ICity) => {
      if(city.ownerId == player?.id) {
        return <div className={s.city}>
          <img className={s.city_img} src={city.img} alt="Город" />
          <div className={s.city_stats}>
            <p><b>lvl:</b> {city.currentLevel + 1}</p>
            <p>{city.levels[city.currentLevel].moneyEveryRound}💰/круг</p>
          </div>
        </div>
      }
      return <></>
    })
  }

  return <BasePopup
    visible={ isVisible }
    toggle={ () => closePopup() }
  >
    <div className={s.detailsContainer}>
      <div className={s.container}>
        <div className={s.top}>
          <div
            className={s.avatar}
            style={{backgroundColor: player?.color}}
          >
            <img className={s['avatar-img']} src={`/characters/roles_head/${player?.rank}.png`} alt="avatar"/>
          </div>
          <div className={s.bio}>
            <p className={s.name}><b>Имя:</b> {player?.name}</p>
            <p className={s.rank}><b>Звание:</b> {player?.rank}</p>
            <p className={s.money}><b>Состояние:</b> {Math.round(player?.money || 0)}💰</p>
          </div>
        </div>

        <div className={s.possessions}>
          <p>Пассивный доход с круга: {calculateSumEveryRound(player?.id || 0)}💰</p>
          {calculateSumEveryRound(player?.id || 0) !== 0 && <p>Владения:</p>}
          <div className={s.cities}>
            { renderCities() }
          </div>
        </div>

        <Button
          className={s.button}
          onClick={() => closePopup()}>
          Ясно
        </Button>
      </div>
    </div>

  </BasePopup>
})