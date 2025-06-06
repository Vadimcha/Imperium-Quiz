import { INITIAL_CITIES } from "./cities.ts";

export interface IMove {
  id: number,
  x: number,
  y: number,
  img?: string,
  type: 'normal' | 'city' | 'battle',
}

export const movesData: IMove[] = [
  { id: 1, x: 1398, y: 1029, type: 'normal' },
  { id: 2, x: 1170, y: 1140, img: '/battle.png', type: 'battle' },
  { id: 3, x: 970, y: 1220, type: 'normal' },
  INITIAL_CITIES[0],
  { id: 5, x: 810, y: 1500, type: 'normal' },
  { id: 6, x: 525, y: 1315, img: '/battle.png', type: 'battle' },
  INITIAL_CITIES[1],
  { id: 8, x: 228, y: 950, type: 'normal' },
  INITIAL_CITIES[2],
  { id: 10, x: 83, y: 542, img: '/battle.png', type: 'battle' },
  { id: 11, x: 268, y: 376, type: 'normal' },
  INITIAL_CITIES[3],
  { id: 13, x: 718, y: 251, type: 'normal' },
  { id: 14, x: 1010, y: 278, img: '/battle.png', type: 'battle' },
  INITIAL_CITIES[4],
  { id: 16, x: 1476, y: 371, type: 'normal' },
  { id: 17, x: 1671, y: 406, img: '/battle.png', type: 'battle' },
  INITIAL_CITIES[5],
]