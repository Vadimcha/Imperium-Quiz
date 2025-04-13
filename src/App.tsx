import './App.css';
import {Cells} from "./components/cells/Cells.tsx";
import {Lines} from "./components/lines/Lines.tsx";
import {Character} from "./components/character/Character.tsx";
import useGameStore from "./store/gameStore.ts";

import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/normalize.css";
import useQuizStore from "./store/quizStore.ts";
import { QUIZ_RESULT_MESSAGE, QUIZZES } from "./data/quiz.ts";
import { QuizPopup } from "./components/quiz/quiz-popup.tsx";

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
          <Character/>
          <Lines/>
          <Cells/>
          <QuizPopup/>
      </div>
  )
}

export default App
