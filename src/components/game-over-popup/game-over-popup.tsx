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

  const close = () => {
    closePopup();
    playerLoose(player!.id);
  }

  return (
    <BasePopup
      visible={ isVisible }
      toggle={ () =>  close() }
    >
      <div className={s.gameOverContainer}>
        <div className={s.container}>
          {players.length !== 1 ?
            <p className={`${s.main_text} ${s.bad_text}`}>
              {player?.name} выбывает
            </p> :
            <p className={`${s.main_text} ${s.good_text}`} style={{color: 'black'}}>
              {player?.name} выигрывает
            </p>
          }

          <div className={s.mid}>
            <div
              className={s.avatar}
              style={{backgroundColor: player?.color}}
            >
              <img className={s['avatar-img']} src={`/characters/roles_head/${player?.rank}.png`} alt="avatar"/>
            </div>
            <p className={`${s.place_text} ${s.good_text}`}>занимает {players.length} место</p>
          </div>
          {
            players.length === 1 && <img className={s.game_over_img} src="/game_over.png" alt="game over"/>
          }
          {
            (calculateSumEveryRound(player?.id || 0) !== 0 && players.length !== 1) &&
            <div>
              <p>Все его владения становятся свободными:</p>
              <div className={s.cities}>
                {renderCities()}
              </div>
            </div>
          }
          <Button
            className={s.button}
            onClick={() => close()}>
            Ясно
          </Button>
        </div>
      </div>

    </BasePopup>
  )
}