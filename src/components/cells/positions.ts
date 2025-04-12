import {movesData} from "../../data/moves.ts";

export interface IPoint {
  id?: number;
  x: number;
  y: number;
}

const imageWidth = 2048, imageHeight = 1536;

export const deltaX = window.innerWidth / imageWidth;
export const deltaY = window.innerHeight / imageHeight;

export const positions: IPoint[] = movesData.map((move) => (
    {
      id: move.id,
      x: move.x * deltaX,
      y: move.y * deltaY
    }
))