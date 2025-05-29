import s from './game-over-popup.module.scss';
import useCitiesStore, {calculateSumEveryRound} from "../../store/citiesStore.ts";
import {Button} from "react-untitled-ui";
import {BasePopup} from "../base-popup";
import useGameOverPopup from "../../store/gameOverPopupStore.ts";
import {ICity} from "../../domain/city.ts";
import usePlayersStore from "../../store/playersStore.ts";

export const GameOverPopup = () => {
  const { player, isVisible, closePopup } = useGameOverPopup();
  const { cities } = useCitiesStore()
  const { playerLoose, players } = usePlayersStore()

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

  return (
    <BasePopup
      visible={ isVisible }
      toggle={ () => closePopup() }
    >
      <div className={s.gameOverContainer}>
        <div className={s.container}>
          <p className={s.lose_text}>{player?.name} выбывает</p>

          <div className={s.mid}>
            <div
              className={s.avatar}
              style={{backgroundColor: player?.color}}
            >
              <img className={s['avatar-img']} src={`/characters/roles_head/${player?.rank}.png`} alt="avatar"/>
            </div>
            <p className={s.place_text}>занимает {players.length} место</p>
          </div>
          {
            calculateSumEveryRound(player?.id || 0) !== 0 &&
            <p>Все его владения становятся свободными:</p>
          }
          <div className={s.cities}>
            {renderCities()}
          </div>

          <Button
            className={s.button}
            onClick={() => {
              closePopup();
              playerLoose(player!.id);
            }}>
            Ясно
          </Button>
        </div>
      </div>

    </BasePopup>
  )
}