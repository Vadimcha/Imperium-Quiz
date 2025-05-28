import { ICity } from "../domain/city.ts";

export const INITIAL_CITIES: ICity[] = [
    {
        id: 4,
        currentLevel: 0,
        ownerId: undefined,
        levels: [
            {
                level: 1,
                tax: 50,
                priceToNextLevel: 100,
                moneyEveryRound: 35,
            },
            {
                level: 2,
                tax: 100,
                priceToNextLevel: 250,
                moneyEveryRound: 45,
            },
            {
                level: 3,
                tax: 250,
                priceToNextLevel: undefined,
                moneyEveryRound: 65,
            }
        ],
        price: 150,
        x: 1140, 
        y: 1420, 
        img: '/cities/city_1.png',
        type: 'city',
    },
    {
        id: 7,
        currentLevel: 0,
        ownerId: undefined,
        levels: [
            {
                level: 1,
                tax: 75,
                priceToNextLevel: 125,
                moneyEveryRound: 40,
            },
            {
                level: 2,
                tax: 150,
                priceToNextLevel: 300,
                moneyEveryRound: 55,
            },
            {
                level: 3,
                tax: 325,
                priceToNextLevel: undefined,
                moneyEveryRound: 70,
            }
        ],
        price: 200,
        x: 365, 
        y: 1153, 
        img: '/cities/city_2.png',
        type: 'city',
    },
    {
        id: 9,
        currentLevel: 0,
        ownerId: undefined,
        levels: [
            {
                level: 1,
                tax: 100,
                priceToNextLevel: 150,
                moneyEveryRound: 45,
            },
            {
                level: 2,
                tax: 150,
                priceToNextLevel: 375,
                moneyEveryRound: 65,
            },
            {
                level: 3,
                tax: 375,
                priceToNextLevel: undefined,
                moneyEveryRound: 90,
            }
        ],
        price: 250,
        x: 80,
        y: 768,
        img: '/cities/city_3.png', 
        type: 'city'
    },
    {
        id: 12,
        currentLevel: 0,
        ownerId: undefined,
        levels: [
            {
                level: 1,
                tax: 115,
                priceToNextLevel: 175,
                moneyEveryRound: 50,
            },
            {
                level: 2,
                tax: 200,
                priceToNextLevel: 450,
                moneyEveryRound: 65,
            },
            {
                level: 3,
                tax: 400,
                priceToNextLevel: undefined,
                moneyEveryRound: 95,
            }
        ],
        price: 300,
        x: 463,
        y: 296,
        img: '/cities/city_4.png',
        type: 'city',
    },
    {
        id: 15,
        currentLevel: 0,
        ownerId: undefined,
        levels: [
            {
                level: 1,
                tax: 95,
                priceToNextLevel: 150,
                moneyEveryRound: 35,
            },
            {
                level: 2,
                tax: 150,
                priceToNextLevel: 300,
                moneyEveryRound: 45,
            },
            {
                level: 3,
                tax: 220,
                priceToNextLevel: undefined,
                moneyEveryRound: 95,
            }
        ],
        price: 250,
        x: 1249,
        y: 346, 
        img: '/cities/city_5.png', 
        type: 'city'
    },
    {
        id: 18,
        currentLevel: 0,
        ownerId: undefined,
        levels: [
            {
                level: 1,
                tax: 75,
                priceToNextLevel: 125,
                moneyEveryRound: 30,
            },
            {
                level: 2,
                tax: 150,
                priceToNextLevel: 300,
                moneyEveryRound: 50,
            },
            {
                level: 3,
                tax: 325,
                priceToNextLevel: undefined,
                moneyEveryRound: 65,
            }
        ],
        price: 200,
        x: 1764,
        y: 592,
        img: '/cities/city_6.png', 
        type: 'city',
    },
]