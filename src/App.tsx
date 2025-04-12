import './App.css';
import {Cells} from "./components/cells/Cells.tsx";
import {Lines} from "./components/lines/Lines.tsx";
import {Character} from "./components/character/Character.tsx";
import useGameStore from "./store/gameStore.ts";

function App() {
  const { nextMove } = useGameStore();

  return (
    <div className={"main"}>
      <img
        className={"background"}
        src="/background1.png"
        alt="background"
      />
      <button
        className={"button"}
        onClick={() => nextMove() }
      >Next Move</button>
      <Character />
      <Lines />
      <Cells />
    </div>
  )
}

export default App
