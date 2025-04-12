import {IPoint, positions} from "../cells/positions.ts";


const drawLine = (positions: IPoint[]): string[] => {
  const res: string[] = [];
  for(let i = 0; i < positions.length; ++i) {
    let point1 = positions[i];
    let point2 = (i !== positions.length - 1 ? positions[i + 1] : positions[0]);

    if (point1.x > point2.x) {
      [point1, point2] = [point2, point1];
    }

    const deltaX = Math.abs(point2.x - point1.x);
    const deltaY = Math.abs(point2.y - point1.y);

    const controlHeight = Math.max(20, Math.min(100, Math.max(deltaX, deltaY) / 3));

    const controlPoint1 = {
      x: point1.x + (point2.x - point1.x) / 2,
      y: point1.y - controlHeight,
    };

    const controlPoint2 = {
      x: point1.x + (point2.x - point1.x) / 2,
      y: point2.y + controlHeight,
    };

    res.push(`M${point1.x} ${point1.y}
          C ${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y}
          ${point2.x},${point2.y}`);
  }
  return res;
}


export const lines = drawLine(positions);