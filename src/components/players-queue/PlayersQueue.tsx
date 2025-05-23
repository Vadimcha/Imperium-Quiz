import useGameStore from "../../store/gameStore.ts";
import usePlayersStore from "../../store/playersStore.ts";
import {characters, ICharacter} from "../../data/characters.ts";
import s from './PlayersQueue.module.css'
import useQuizStore from "../../store/quizStore.ts";
import {useEffect, useState} from "react";

export const PlayersQueue = () => {
  const { activePlayer } = useGameStore();
  const { players } = usePlayersStore()
  const { quiz } = useQuizStore()
  const [isQuiz, setIsQiuz] = useState<boolean | null>(null)

  useEffect(() => {
    setIsQiuz(!!quiz);
    console.log(!!quiz)
  }, [quiz]);


  if(!isQuiz) {
    return (
      <div className={s.container}>
        <div className={s.grid}>
          { players.map((player: ICharacter) => {
            let className: string = s.third_player;
            if(player.id === activePlayer)
              className = s.first_player;
            else if ((activePlayer + 1) % players.length === player.id)
              className = s.second_player

            return <img
              key={player.id}
              className={className}
              src={characters[player.id].fullImg}
              alt="Игрок"
            />
          }) }
        </div>
      </div>
    )
  }
  else {
    const player = players.find((player: ICharacter) => player.id === activePlayer) || players[0];
    return (
      <div className={s.container}>
        <img
          className={s.active_player}
          src={characters[player.id].fullImg}
          alt="Игрок"
        />
      </div>
    )
  }
}