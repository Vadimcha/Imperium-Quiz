import { PlayerColor } from "../domain/player.ts";

export type RANK = 'Король' | 'Герцог' | 'Граф' | 'Рыцарь' | 'Ремесленник' | 'Крестьянин' | 'Шут';

export const INITIAL_BUDGET = 500;
export const INITIAL_RANK: RANK = 'Крестьянин';

export interface ICharacter {
  id: number,
  color: PlayerColor,
  fullImg: string,
  money: number,
  rank: RANK,
  name: string,
}

export const characters = [
  {
    id: 0,
    headImg: '/characters/head/head_0.png',
    fullImg: '/characters/full/full_0.png',
    money: INITIAL_BUDGET,
    rank: INITIAL_RANK,
  },
  {
    id: 1,
    headImg: '/characters/head/head_1.png',
    fullImg: '/characters/full/full_1.png',
    money: INITIAL_BUDGET,
    rank: INITIAL_RANK,
  },
  {
    id: 2,
    headImg: '/characters/head/head_2.png',
    fullImg: '/characters/full/full_2.png',
    money: INITIAL_BUDGET,
    rank: INITIAL_RANK,
  },
]