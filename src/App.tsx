import './App.css';
import { Cells } from "./components/cells/Cells.tsx";
import { Lines } from "./components/lines/Lines.tsx";
import { CharacterFull } from "./components/character/CharacterFull.tsx";
import useGameStore from "./store/gameStore.ts";

import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/normalize.css";
import useQuizStore from "./store/quizStore.ts";
import { QUIZ_RESULT_MESSAGE, QUIZZES } from "./data/quiz.ts";
import { QuizPopup } from "./components/quiz/quiz-popup.tsx";
import { Cube } from "./components/cube/cube.tsx";
import {CharacterAvatar} from "./components/character/CharacterAvatar.tsx";
import {PlayersQueue} from "./components/players-queue/PlayersQueue.tsx";

function App() {
  const { nextMove } = useGameStore();
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
          <CharacterFull playerId={0} />
          <CharacterFull playerId={1} />
          <CharacterFull playerId={2} />
          <CharacterAvatar />

          <PlayersQueue />

          <Lines />
          <Cells />
          <QuizPopup />
          <Cube />
      </div>
  )
}

export default App
