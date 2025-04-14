export type rank = 'Король' | 'Герцог' | 'Граф' | 'Рыцарь' | 'Ремесленник' | 'Крестьянин' | 'Раб';

const initialBudget = 500;
const initialRank: rank = 'Крестьянин';

export interface ICharacter {
  id: number,
  headImg: string,
  fullImg: string,
  money: number,
  rank: rank,
}

export const characters = [
  {
    id: 0,
    headImg: '/characters/head/head_0.png',
    fullImg: '/characters/full/full_0.png',
    money: initialBudget,
    rank: initialRank,
  },
  {
    id: 1,
    headImg: '/characters/head/head_1.png',
    fullImg: '/characters/full/full_1.png',
    money: initialBudget,
    rank: initialRank,
  },
  {
    id: 2,
    headImg: '/characters/head/head_2.png',
    fullImg: '/characters/full/full_2.png',
    money: initialBudget,
    rank: initialRank,
  },
]