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
  { id: 4, x: 1140, y: 1420, img: '/cities/city_1.png', type: 'city' },
  { id: 5, x: 810, y: 1500, type: 'normal' },
  { id: 6, x: 525, y: 1315, img: '/battle.png', type: 'battle' },
  { id: 7, x: 365, y: 1153, img: '/cities/city_2.png', type: 'city' },
  { id: 8, x: 228, y: 950, type: 'normal' },
  { id: 9, x: 80, y: 768, img: '/cities/city_3.png', type: 'city' },
  { id: 10, x: 83, y: 542, img: '/battle.png', type: 'battle' },
  { id: 11, x: 268, y: 376, type: 'normal' },
  { id: 12, x: 463, y: 296, img: '/cities/city_4.png', type: 'city' },
  { id: 13, x: 718, y: 251, type: 'normal' },
  { id: 14, x: 1010, y: 278, img: '/battle.png', type: 'battle' },
  { id: 15, x: 1249, y: 346, img: '/cities/city_5.png', type: 'city' },
  { id: 16, x: 1476, y: 371, type: 'normal' },
  { id: 17, x: 1671, y: 406, img: '/battle.png', type: 'battle' },
  { id: 18, x: 1764, y: 592, img: '/cities/city_6.png', type: 'city' }
]