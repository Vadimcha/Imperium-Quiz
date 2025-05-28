import './App.css';
import { Cells } from "./components/cells/Cells.tsx";
import { Lines } from "./components/lines/Lines.tsx";
import { CharacterFull } from "./components/character/CharacterFull.tsx";
import useGameStore from "./store/gameStore.ts";

import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/normalize.css";
import "react-untitled-ui/dist/cjs/index.css";
import "react-untitled-ui/src/styles/global.scss";
import useQuizStore from "./store/quizStore.ts";
import { QUIZ_RESULT_MESSAGE, QUIZZES } from "./data/quiz.ts";
import { QuizPopup } from "./components/quiz/quiz-popup.tsx";
import { Cube } from "./components/cube/cube.tsx";
import {CharacterAvatar} from "./components/character/CharacterAvatar.tsx";
import {PlayersQueue} from "./components/players-queue/PlayersQueue.tsx";
import { GameStartPage } from "./components/game-start/game-start-page.tsx";
import usePlayersStore from "./store/playersStore.ts";
import { CityPopup } from "./components/city-popup/city-popup.tsx";
import { CityDetailPopup } from "./components/city-detail-popup/city-detail-popup.tsx";

function App() {
  const { nextMove } = useGameStore();
  const { players } = usePlayersStore();
  const { setQuiz } = useQuizStore();

  return (
      <div className={ "main" }>
          <img
              className={ "background" }
              src="/background1.png"
              alt="background"
          />
          <button
              className={ "button" }
              onClick={ () => nextMove() }
          >Next Move
          </button>
          <button
              className={ "button2" }
              onClick={ () => setQuiz(QUIZZES[0], QUIZ_RESULT_MESSAGE)}
          >Квиз
          </button>
          {
              players.map(player => {
                  return <CharacterFull playerId={player.id} />
              })
          }
          <CharacterAvatar />

          <PlayersQueue />

          <Lines />
          <Cells />
          <QuizPopup />
          <Cube />
          <CityPopup/>
          <CityDetailPopup/>

          {
              players.length == 0 && <GameStartPage/>
          }
      </div>
  )
}

export default App
