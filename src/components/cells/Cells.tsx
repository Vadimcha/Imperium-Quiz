import {deltaX, IPoint, positions} from "./positions.ts";
import {useEffect} from "react";
import {movesData} from "../../data/moves.ts";

export const Cells = () => {
  const cellsPositions = positions;
  useEffect(() => {
    console.log(positions);
  }, []);
  return <>
    {
      cellsPositions.map((p: IPoint) => {
        const moveData = movesData.find(move => move.id === p.id)
        if(moveData && moveData.img) {
          return <img
            style={{
              position: "absolute",
              left: `${p.x - 10}px`,
              top: `${p.y - 10}px`,
              width: `${200 * deltaX}px`,
              height: 'auto',
              transform: 'translate(-50%, -50%)'
            }}
            src={moveData.img}
            alt="dot"
            onClick={() => console.log(`clicked dot: id=${p.id}`)}
          />
        }

        return <div
          onClick={() => console.log(`clicked dot: id=${p.id}`)}
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x - 10}px`,
            top: `${p.y - 10}px`,
            width: "20px",
            height: "20px",
            background: "red",
            borderRadius: "50%",
            border: "2px solid white",
          }}
        />
      })
    }
  </>
}