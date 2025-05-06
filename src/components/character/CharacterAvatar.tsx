import './CharacterAvatar.css'
import useGameStore from "../../store/gameStore.ts";
import {characters} from "../../data/characters.ts";
import usePlayersStore from "../../store/playersStore.ts";
import { useMoneyAnimation } from "../../utils/animations/money/money-animation.tsx";
import money from "../../assets/money.json";
import Lottie from "lottie-react";

export const CharacterAvatar = () => {
  const { activePlayer } = useGameStore()
  const { players } = usePlayersStore();
  const { showMoney } = useMoneyAnimation();

  return (
    <div className="container">
      <div className="stats">
        <p className={'stats_unit'}>{Math.round(players[activePlayer].money)} 💰</p>
        <p className={'stats_unit'}>{players[activePlayer].rank} ⚜️</p>
      </div>
      <img
        className={"avatar"}
        src={characters[activePlayer].headImg}
        alt="avatar"
      />
      { showMoney && <Lottie
        animationData={money}
        autoplay
        loop={false}
        className="money"
      /> }
    </div>
  );
};
