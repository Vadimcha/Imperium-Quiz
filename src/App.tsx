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
import { QuizPopup } from "./components/quiz/quiz-popup.tsx";
import { Cube } from "./components/cube/cube.tsx";
import { CharacterAvatar } from "./components/character/CharacterAvatar.tsx";
import { GameStartPage } from "./components/game-start/game-start-page.tsx";
import usePlayersStore from "./store/playersStore.ts";
import { CityPopup } from "./components/city-popup/city-popup.tsx";
import { CityDetailPopup } from "./components/city-detail-popup/city-detail-popup.tsx";
import { CharacterDetailPopup } from "./components/character-detail-popup/character-detail-popup.tsx";
import { BattleStartPopup } from "./components/battle-start-popup/battle-start-popup.tsx";
import { BattleResultPopup } from "./components/battle-result-popup/battle-result-popup.tsx";
import { GameOverPopup } from "./components/game-over-popup/game-over-popup.tsx";

function App() {
  const { nextMove, process } = useGameStore();
  const { players } = usePlayersStore();

  return (
      <div className={ "main" }>
          <img
              className={ "background" }
              src="/background1.png"
              alt="background"
          />
          <button
              disabled={process === 'move'}
              className={ "button" }
              onClick={ () => nextMove() }
          >Ходить!
          </button>
          {
              players.map(player => {
                  return <CharacterFull playerId={player.id} />
              })
          }
          <CharacterAvatar />

          <Lines />
          <Cells />
          <QuizPopup />
          <Cube />
          <CityPopup/>
          <CityDetailPopup/>
          <CharacterDetailPopup/>
          <BattleStartPopup/>
          <BattleResultPopup/>
          <GameOverPopup />

          {
              players.length == 0 && <GameStartPage/>
          }
      </div>
  )
}

export default App
