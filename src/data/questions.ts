export interface IAnswer {
  id: number,
  content: string,
  isCorrect: boolean,
}

export interface IQuestion {
  id: number,
  question: string,
  complexity: number,
  imageUrl?: string,
  answers: IAnswer[]
}

export const questions: IQuestion[] = [
  {
    id: 1,
    question: "Год крещения руси?",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "989",
        isCorrect: false,
      },
      {
        id: 2,
        content: "898",
        isCorrect: false,
      },
      {
        id: 3,
        content: "988",
        isCorrect: true,
      },
      {
        id: 4,
        content: "889",
        isCorrect: false,
      }
    ]
  },
  {
    id: 2,
    question: "Дата начала Первой мировой войны?",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "1 сентября 1914 года",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1 августа 1914 года",
        isCorrect: true,
      },
      {
        id: 3,
        content: "1 сентября 1904 года",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1 августа 1904 года",
        isCorrect: false,
      }
    ]
  },
  {
    id: 3,
    question: "Дата начала Второй мировой войны?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "22 июня 1941 года",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1 сентября 1939 года",
        isCorrect: true,
      },
      {
        id: 3,
        content: "8 сентября 1941 года",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1 сентября 1941 года",
        isCorrect: false,
      }
    ]
  },
  {
    id: 4,
    question: "Дата начала Великой Отечественной войны?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "22 июня 1941 года",
        isCorrect: true,
      },
      {
        id: 2,
        content: "1 сентября 1939 года",
        isCorrect: false,
      },
      {
        id: 3,
        content: "8 сентября 1941 года",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1 сентября 1941 года",
        isCorrect: false,
      }
    ]
  },
  {
    id: 5,
    question: "Укажите название крепости, у когторой произошло событие, названное потом 'Атака мертвецов'",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "крепость Осовец",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Брестская крепость",
        isCorrect: false,
      },
      {
        id: 3,
        content: "крепость Пиллау",
        isCorrect: false,
      },
      {
        id: 4,
        content: "крепость Орешек",
        isCorrect: false,
      }
    ]
  },
  {
    id: 6,
    question: "Даты правления Петра 1",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "1676-1682",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1682-1696",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1682-1725",
        isCorrect: true,
      },
      {
        id: 4,
        content: "1725-1727",
        isCorrect: false,
      }
    ]
  },
  {
    id: 7,
    question: "В каком году произошло призвание варягов на Русь?",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "862",
        isCorrect: true,
      },
      {
        id: 2,
        content: "988",
        isCorrect: false,
      },
      {
        id: 3,
        content: "892",
        isCorrect: false,
      },
      {
        id: 4,
        content: "962",
        isCorrect: false,
      }
    ]
  },
  {
    id: 8,
    question: "Кто был первым князем династии Рюриковичей?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Ярослав Мудрый",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Рюрик",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Вещий Олег",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Владимир Мономах",
        isCorrect: false,
      }
    ]
  },
  {
    id: 9,
    question: "Кто крестил Русь?",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Ярослав Мудрый",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Игорь 1",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Вещий Олег",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Владимир Святославич",
        isCorrect: true,
      }
    ]
  },
  {
    id: 10,
    question: "Назовите автора 'Повести временных лет'",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Владимир Мономах",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Даниил Заточник",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Нестор Летописец",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Митрополит Иларион",
        isCorrect: false,
      }
    ]
  },
  {
    id: 11,
    question: "Какой князь разгромил Хазарский каганат?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Олег Вещий",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Игорь Старый",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Святослав Игоревич",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Мстислав Удалой",
        isCorrect: false,
      }
    ]
  },
  {
    id: 12,
    question: "Что такое 'Русская Правда'",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Сборник церковных законов",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Сборник правовых норм Киевской Руси",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Летописный свод",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Договор с Византией",
        isCorrect: false,
      }
    ]
  },
  {
    id: 13,
    question: "Какое сражение описано в 'Слове о полку Игореве'",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "Сражение на реке Каяле",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Битва на Калке",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Оборона Киева от печенегов",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Сражение на реке Сити",
        isCorrect: false,
      }
    ]
  },
  {
    id: 14,
    question: "В каком году произошла битва на Калке?",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "1242",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1236",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1220",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1223",
        isCorrect: true,
      }
    ]
  },
  {
    id: 15,
    question: "Кто возглавил оборону Киева от монголов в 1240 году?",
    complexity: 9,
    answers: [
      {
        id: 1,
        content: "Князь Михаил Черниговский",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Александр Невский",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Тысяцкий Дмитр",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Даниил Галицкий",
        isCorrect: false,
      }
    ]
  },
  {
    id: 16,
    question: "Как звали хана, разорившего Русь в 1237–1240 гг.?",
    complexity: 8,
    answers: [
      {
        id: 1,
        content: "Тохтамыш",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Хан Батый",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Мамай",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Чингисхан",
        isCorrect: false,
      }
    ]
  },
  {
    id: 17,
    question: "Какое сражение называют 'Ледовым побоищем'?",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Битва на реке Воже",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Сражение при Шелони",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Битва на Чудском озере",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Липицкая битва",
        isCorrect: false,
      }
    ]
  },
  {
    id: 18,
    question: "Кто был первым московским князем?",
    complexity: 8,
    answers: [
      {
        id: 1,
        content: "Иван Калита",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Андрей Боголюбский",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Даниил Александрович",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Юрий Долгорукий",
        isCorrect: false,
      }
    ]
  },
  {
    id: 19,
    question: "Какой митрополит поддержал возвышение Москвы?",
    complexity: 10,
    answers: [
      {
        id: 1,
        content: "Макарий",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Феогност",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Киприан",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Пётр",
        isCorrect: true,
      }
    ]
  },
  {
    id: 20,
    question: "В каком году произошла Куликовская битва?",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "1380",
        isCorrect: true,
      },
      {
        id: 2,
        content: "1382",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1395",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1408",
        isCorrect: false,
      }
    ]
  },
  {
    id: 21,
    question: "Кто командовал русскими войсками в Куликовской битве?",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "Дмитрий Шемяка",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Владимир Храбрый",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Олег Рязанский",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Дмитрий Донской",
        isCorrect: true,
      }
    ]
  },
  {
    id: 22,
    question: "В каком году произошло стояние на реке Угре?",
    complexity: 8,
    answers: [
      {
        id: 1,
        content: "1480",
        isCorrect: true,
      },
      {
        id: 2,
        content: "1462",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1485",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1476",
        isCorrect: false,
      }
    ]
  },
  {
    id: 23,
    question: "Годы царствия Ивана 4",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "1525–1584",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1547–1584",
        isCorrect: true,
      },
      {
        id: 3,
        content: "1530–1588",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1533–1581",
        isCorrect: false,
      }
    ]
  },
  {
    id: 24,
    question: "Что такое опричнина?",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Система местного самоуправления",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Придворная гвардия царя",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Личные владния Ивана 4",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Церковный суд",
        isCorrect: false,
      }
    ]
  },
  {
    id: 25,
    question: "Кто такой Ермак Тимофеевич?",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "Основатель Тобольска",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Лидер стрелецкого бунта",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Казачий атаман, покоривший Казань",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Покоритель Сибири",
        isCorrect: true,
      }
    ]
  },
  {
    id: 26,
    question: "Кто стал первым русским патриархом?",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Иов",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Никон",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Гермоген",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Иоаким",
        isCorrect: false,
      }
    ]
  },
  {
    id: 27,
    question: "Кто возглавил народное ополчение в 1612 году?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Василий Голицын и Фёдор Шереметев",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Кузьма Минин и Дмитрий Пожарский",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Князь Пожарский и Кузьма Ляпунов",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Иван Сусанин и Михаил Шуйский",
        isCorrect: false,
      }
    ]
  },
  {
    id: 28,
    question: "Какая династия пришла к власти после Смуты?",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Годуновы",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Шуйские",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Романовы",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Милославские",
        isCorrect: false,
      }
    ]
  },
  {
    id: 29,
    question: "Что решил Земский собор 1613 года?",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Избрать Владислава IV царём",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Призвать на престол шведского принца",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Учредить регентство при малолетнем царе",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Избрать на царство Михаила Романова",
        isCorrect: true,
      }
    ]
  },
  {
    id: 30,
    question: "Кто стал первым императором России?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Пётр 1",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Алексей Михайлович",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Фёдор Алексеевич",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Иван 4",
        isCorrect: false,
      }
    ]
  },
  {
    id: 31,
    question: "Что такое Великое посольство Петра I?",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "Дипломатическая миссия в Китай",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Дипломатическая миссия в Европу",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Переговоры с Османской империей",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Поездка царя по русским городам",
        isCorrect: false,
      }
    ]
  },
  {
    id: 32,
    question: "Какое сражение стало переломным в Северной войне 1700?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Битва при Нарве",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Сражение при Лесной",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Полтавская битва",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Гангутский бой",
        isCorrect: false,
      }
    ]
  },
  {
    id: 33,
    question: "Какое сражение Пётр 1 назвал матерью полтавской битвы?",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Битва при Калише",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Взятие Нотебурга",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Сражение при Гренгаме",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Битва при Лесной",
        isCorrect: true,
      }
    ]
  },
  {
    id: 34,
    question: "Что такое Табель о рангах?",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "Закон о порядке государственной службы",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Список придворных чинов",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Закон о наследовании престола",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Реформа местного управления",
        isCorrect: false,
      }
    ]
  },
  {
    id: 35,
    question: "Кто такие 'верховники' при Анне Иоанновне?",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Члены Боярской думы",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Члены Верховного тайного совета",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Члены Боярской думы",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Тайная полиция",
        isCorrect: false,
      }
    ]
  },
  {
    id: 36,
    question: "Кто возглавил восстание 1773 года?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Степан Разин",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Кондратий Булавин",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Емельян Пугачёв",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Иван Болотников",
        isCorrect: false,
      }
    ]
  },
  {
    id: 37,
    question: "В каком году произошёл четвёртый раздел Польши?",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "1772",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1793",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1795",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1815",
        isCorrect: true,
      }
    ]
  },
  {
    id: 38,
    question: "Кто был главнокомандующим русской армией в 1812 году?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Михаил Кутузов",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Александр Суворов",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Пётр Багратион",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Михаил Барклай-де-Толли",
        isCorrect: false,
      }
    ]
  },
  {
    id: 39,
    question: "Год восстания декабристов",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "1820",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1825",
        isCorrect: true,
      },
      {
        id: 3,
        content: "1830",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1835",
        isCorrect: false,
      }
    ]
  },
  {
    id: 40,
    question: "Кто отменил крепостное право?",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Александр III",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Николай II",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Александр II",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Николай I",
        isCorrect: false,
      }
    ]
  },
  {
    id: 41,
    question: "В каком году была проведена судебная реформа Александра 2?",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "1861",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1870",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1855",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1864",
        isCorrect: true,
      }
    ]
  },
  {
    id: 42,
    question: "Что такое народничество?",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "Движение за создание социалимзма",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Движение за возврат к допетровским традициям",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Религиозное течение",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Поддержка абсолютной монархии",
        isCorrect: false,
      }
    ]
  },
  {
    id: 43,
    question: "Кто убил Александра II?",
    complexity: 10,
    answers: [
      {
        id: 1,
        content: "Гаврило Принцип",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Игнатий Иоахимович",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Дмитрий Каракозов",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Андрей Желябов",
        isCorrect: false,
      }
    ]
  },
  {
    id: 44,
    question: "В каком году произошло Кровавое воскресенье?",
    complexity: 10,
    answers: [
      {
        id: 1,
        content: "1903",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1904",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1905",
        isCorrect: true,
      },
      {
        id: 4,
        content: "1906",
        isCorrect: false,
      }
    ]
  },
  {
    id: 45,
    question: "Почему Вторая Тихоокеанская эскадра была разгромлена?",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Отсутствие разведданных",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Неподготовленность моряков",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Длительный поход",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Всё вышеперечисленное",
        isCorrect: true,
      }
    ]
  },
  {
    id: 46,
    question: "Что такое 'Манифест 17 октября'?",
    complexity: 10,
    answers: [
      {
        id: 1,
        content: "Указ о создании Думы",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Начало столыпинской реформы",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Введение военного положения",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Указ об отмене выкупных платежей",
        isCorrect: false,
      }
    ]
  },
  {
    id: 47,
    question: "Кто был последним российским императором?",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "Александр III",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Николай II",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Михаил II",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Владимир Ильич",
        isCorrect: false,
      }
    ]
  },
  {
    id: 48,
    question: "Что стало поводом для февральской революции?",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Забастовка на Путиловском заводе",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Расстрел демонстрации",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Отсутствие хлеба на прилавках в петрограде",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Отречение Николая II",
        isCorrect: false,
      }
    ]
  },
  {
    id: 49,
    question: "Кто был первым главой Временного правительства?",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Ленин",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Троцкий",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Керенский",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Львов",
        isCorrect: true,
      }
    ]
  },
  {
    id: 50,
    question: "Какие лозунги отсутствовали в Аперльских тезисах Ленина?",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Война до победы!",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Никакой поддержки Временному правительству!",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Национализация всей земли!",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Вся власть Советам!",
        isCorrect: false,
      }
    ]
  }
]