import {deltaX, IPoint, positions} from "./positions.ts";
import {IMove, movesData} from "../../data/moves.ts";
import useCitiesStore from "../../store/citiesStore.ts";
import "./Cells.css";

export const Cells = () => {
  const cityStore = useCitiesStore()

  const renderCity = (point: IPoint, moveData: IMove) => {
    return <img
      key={point.id}
      className="city_cell"
      style={{
        position: "absolute",
        left: `${point.x - 10}px`,
        top: `${point.y - 10}px`,
        width: `${200 * deltaX}px`,
        height: 'auto',
        transform: 'translate(-50%, -50%)',
      }}
      src={moveData.img}
      alt="city"
      onClick={() => cityStore.setDetailPopup(point.id)}
    />
  }

  const renderBattle = (point: IPoint, moveData: IMove) => {
    return <img
      key={point.id}
      style={{
        position: "absolute",
        left: `${point.x - 10}px`,
        top: `${point.y + 5}px`,
        width: `${150 * deltaX}px`,
        height: 'auto',
        transform: 'translate(-50%, -50%)'
      }}
      src={moveData.img}
      alt="battle"
      onClick={() => console.log(`clicked battle: id=${point.id}`)}
    />
  }

  const renderDot = (point: IPoint) => {
    return <div
      key={point.id}
      style={{
        position: "absolute",
        left: `${point.x - 10}px`,
        top: `${point.y - 10}px`,
        width: "20px",
        height: "20px",
        background: "red",
        borderRadius: "50%",
        border: "2px solid white",
      }}
      onClick={() => console.log(`clicked dot: id=${point.id}`)}
    />
  }

  return <>
    {
      positions.map((point: IPoint) => {
        const moveData = movesData.find((move: IMove) => move.id === point.id)
        if(moveData) {
          if(moveData.type === 'city') return renderCity(point, moveData);
          if(moveData.type === 'battle') return renderBattle(point, moveData);
        }

        return renderDot(point);
      })
    }
  </>
}