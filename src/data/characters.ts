import { PlayerColor } from "../domain/player.ts";

export type RANK =
  'Король' | // 4000 - +inf
  'Герцог' | // 3000 - 4000
  'Граф' | // 2000 - 3000
  'Рыцарь' | // 1500 - 2000
  'Ремесленник' | // 1000 - 1500
  'Крестьянин' | // 600 - 1000
  'Шут' // -inf - 600
;

export type RankRange = {
  min: number;
  max: number;
  title: RANK;
};

export const RANK_RANGES: RankRange[] = [
  { min: 4000, max: Infinity, title: 'Король' },
  { min: 3000, max: 4000, title: 'Герцог' },
  { min: 2000, max: 3000, title: 'Граф' },
  { min: 1500, max: 2000, title: 'Рыцарь' },
  { min: 1000, max: 1500, title: 'Ремесленник' },
  { min: 600, max: 1000, title: 'Крестьянин' },
  { min: -Infinity, max: 600, title: 'Шут' },
];

export const INITIAL_BUDGET = 1000;
export const BUDGET_EVERY_ROUND = 500;
export const INITIAL_RANK: RANK = 'Крестьянин';

export interface ICharacter {
  id: number,
  color: PlayerColor,
  fullImg: string,
  money: number,
  rank: RANK,
  name: string,
  position: number,
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