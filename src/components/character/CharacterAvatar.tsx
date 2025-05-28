import './CharacterAvatar.scss'
import useGameStore from "../../store/gameStore.ts";
import usePlayersStore from "../../store/playersStore.ts";
import { useMoneyAnimation } from "../../utils/animations/money/money-animation.tsx";
import money from "../../assets/money.json";
import Lottie from "lottie-react";
import { Fragment } from "react";
import useCharacterDetailPopup from "../../store/characterDetailPopupStore.ts";

export const CharacterAvatar = () => {
    const {activePlayer} = useGameStore()
    const {players} = usePlayersStore();
    const {showMoney} = useMoneyAnimation();
    const {showPopup} = useCharacterDetailPopup()
    
    if (players.length == 0) return <Fragment/>

    return (
        <div className="container">
            {
                players.map(((player, i) => <div className="player_tile">
                    <div
                      className="avatar"
                      style={{backgroundColor: player.color}}
                      onClick={() => showPopup(player.id)}
                    >
                        <img className="avatar-img" src={`/characters/roles_head/${player.rank}.png`} alt="avatar"/>
                    </div>
                    <div
                      style={{outline: (activePlayer == i ? "3px solid #90ee90" : "")}}
                      className="stats" >
                        <p className={ 'stats_unit' }>{ Math.round(player.money) } 💰</p>
                        {/*<p className={ 'stats_unit' }>{ players[activePlayer].rank } ⚜️</p>*/ }
                    </div>
                    { showMoney && <Lottie
                        animationData={ money }
                        autoplay
                        loop={ false }
                        className="money"
                    /> }
                </div>))
            }
        </div>
    );
};
