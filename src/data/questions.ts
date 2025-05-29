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
    question: "Крепость, у которой произошло событие, названное потом 'Атака мертвецов'",
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
  },
  {
    id: 51,
    question: "В каком году был спущен на воду линкор Бисмарк",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "1936",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1938",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1939",
        isCorrect: true,
      },
      {
        id: 4,
        content: "1941",
        isCorrect: false,
      }
    ]
  },
  {
    id: 52,
    question: "Как назывался линкор, являвшиёся флагманом флота США до его потопления Бисмарком",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "HMS Prince of Wales",
        isCorrect: false,
      },
      {
        id: 2,
        content: "HMS Hood",
        isCorrect: true,
      },
      {
        id: 3,
        content: "HMS Ark Royal",
        isCorrect: false,
      },
      {
        id: 4,
        content: "HMS King George V",
        isCorrect: false,
      }
    ]
  },
  {
    id: 53,
    question: "Какой страной был построен Бисмарк",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "США",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Германия",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Великобритания",
        isCorrect: false,
      },
      {
        id: 4,
        content: "СССР",
        isCorrect: false,
      }
    ]
  },
  {
    id: 54,
    question: "Сколько орудий главного калибра было на Бисмарке",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "6",
        isCorrect: false,
      },
      {
        id: 2,
        content: "8",
        isCorrect: true,
      },
      {
        id: 3,
        content: "9",
        isCorrect: false,
      },
      {
        id: 4,
        content: "12",
        isCorrect: false,
      }
    ]
  },
  {
    id: 55,
    question: "Назовите корабль, повредивший рулевое управление Бисмарка",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "HMS Ark Royal",
        isCorrect: true,
      },
      {
        id: 2,
        content: "HMS Sheffield",
        isCorrect: false,
      },
      {
        id: 3,
        content: "HMS Victorious",
        isCorrect: false,
      },
      {
        id: 4,
        content: "HMS Hood",
        isCorrect: false,
      }
    ]
  },
  {
    id: 56,
    question: "Для чего разрабатывалось немецкое артеллерийское орудие Дора",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Для штурма севостополя",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Для обстрела Лондона",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Для разрушения укреплений линии Мажино",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Для уничтожения американских конвоев в атлантическом океане",
        isCorrect: false,
      }
    ]
  },
  {
    id: 57,
    question: "Какой калибр имела пушка Дора",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "600мм",
        isCorrect: false,
      },
      {
        id: 2,
        content: "700мм",
        isCorrect: false,
      },
      {
        id: 3,
        content: "800мм",
        isCorrect: true,
      },
      {
        id: 4,
        content: "910мм",
        isCorrect: false,
      }
    ]
  },
  {
    id: 58,
    question: "Какой советский танк стал символом победы во второй мировой войне",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "КВ-1",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Т-34",
        isCorrect: true,
      },
      {
        id: 3,
        content: "ИС",
        isCorrect: false,
      },
      {
        id: 4,
        content: "БТ-7",
        isCorrect: false,
      }
    ]
  },
  {
    id: 59,
    question: "Какой танк был произведён в самом большом количестве в вермахте",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Tiger I",
        isCorrect: false,
      },
      {
        id: 2,
        content: "StuG III",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Panther",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Pz.Kpfw. IV",
        isCorrect: true,
      }
    ]
  },
  {
    id: 60,
    question: "Какой советский танк был ответом немецкому Тигру",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "Т-44",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Т-70",
        isCorrect: false,
      },
      {
        id: 3,
        content: "ИС-2",
        isCorrect: true,
      },
      {
        id: 4,
        content: "СУ-100",
        isCorrect: false,
      }
    ]
  },
  {
    id: 61,
    question: "Какой немецкий танк имел наклонную броню(как у Т-34)",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Tiger I",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Pz.Kpfw. III",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Panther",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Pz2",
        isCorrect: false,
      }
    ]
  },
  {
    id: 62,
    question: "Какой танк был самым тяжёлым выпущенным во время второй мировой войны",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "FCM 2C",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Panzerkampfwagen VIII Maus",
        isCorrect: true,
      },
      {
        id: 3,
        content: "ИС-2",
        isCorrect: false,
      },
      {
        id: 4,
        content: "СУ-100",
        isCorrect: false,
      }
    ]
  },
  {
    id: 63,
    question: "Какая САУ была сделана на базе Т-34",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "СУ-76",
        isCorrect: false,
      },
      {
        id: 2,
        content: "СУ-100",
        isCorrect: true,
      },
      {
        id: 3,
        content: "СУ-152",
        isCorrect: false,
      },
      {
        id: 4,
        content: "ИСУ-152",
        isCorrect: false,
      }
    ]
  },
  {
    id: 64,
    question: "Кто стал инициатором политики перестройки",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Леонид Брежнев",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Константин Черненко",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Юрий Андропов",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Михаил Горбачёв",
        isCorrect: true,
      }
    ]
  },
  {
    id: 65,
    question: "Какая программа была ключевой для экономики перестройки",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "Пятилетка",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Железный занавес",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Ускорение",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Коллективизация",
        isCorrect: false,
      }
    ]
  },
  {
    id: 66,
    question: "Какое событие ускорило распад СССР",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "Олимпиада-80",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Августовский путч",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Визит Горбачёва в США",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Создание СЭВ",
        isCorrect: false,
      }
    ]
  },
  {
    id: 67,
    question: "Какая реформа позволила создавать частные предприятия в СССР",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Программа Жильё-2000",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Колхозный устав",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Закон о кооперации",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Ликвидация Госплана",
        isCorrect: false,
      }
    ]
  },
  {
    id: 68,
    question: "Какой термин связан с дефицитом товаров в конце 1980-х",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Изобилие",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Рынок",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Талоны",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Экспорт",
        isCorrect: false,
      }
    ]
  },
  {
    id: 69,
    question: "Какая страна первой вышла из СССР",
    complexity: 10,
    answers: [
      {
        id: 1,
        content: "Украина",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Беларусь",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Казахстан",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Литва",
        isCorrect: true,
      }
    ]
  },
  {
    id: 70,
    question: "Что означал лозунг Больше социализма",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Очищение социализма от недостатков",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Отказ от реформ",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Роспуск КПСС",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Возврат к политике сталина",
        isCorrect: false,
      }
    ]
  },
  {
    id: 71,
    question: "Какой фильм стал символом гласности",
    complexity: 10,
    answers: [
      {
        id: 1,
        content: "Бриллиантовая рука",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Москва слезам не верит",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Ирония судьбы",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Покаяние",
        isCorrect: true,
      }
    ]
  },
  {
    id: 72,
    question: "Когда СССР официально прекратил существование",
    complexity: 8,
    answers: [
      {
        id: 1,
        content: "26 декабря 1991",
        isCorrect: true,
      },
      {
        id: 2,
        content: "19 августа 1991",
        isCorrect: false,
      },
      {
        id: 3,
        content: "12 июня 1990",
        isCorrect: false,
      },
      {
        id: 4,
        content: "31 декабря 1999",
        isCorrect: false,
      }
    ]
  },
  {
    id: 73,
    question: "Кто открыл закон всемирного тяготения",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "Галилео Галилей",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Исаак Ньютон",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Альберт Эйнштейн",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Никола Тесла",
        isCorrect: false,
      }
    ]
  },
  {
    id: 74,
    question: "Какой учёный впервые разделил атомное ядро",
    complexity: 8,
    answers: [
      {
        id: 1,
        content: "Мария Кюри",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Нильс Бор",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Эрнест Резерфорд",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Энрико Ферми",
        isCorrect: false,
      }
    ]
  },
  {
    id: 75,
    question: "Что открыл Дмитрий Менделеев",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "Радиоактивность",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Электрический ток",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Строение ДНК",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Периодический закон химических элементов",
        isCorrect: true,
      }
    ]
  },
  {
    id: 76,
    question: "Кого считают создателем первой вакцины от оспы",
    complexity: 10,
    answers: [
      {
        id: 1,
        content: "Эдвард Дженнер",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Луи Пастер",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Роберт Кох",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Александр Флеминг",
        isCorrect: false,
      }
    ]
  },
  {
    id: 77,
    question: "Какое открытие сделал Майкл Фарадей",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Теория относительности",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Электромагнитная индукция",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Структура атома",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Пенициллин",
        isCorrect: false,
      }
    ]
  },
  {
    id: 78,
    question: "Что изобрёл Томас Эдисон",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Телефон",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Паровой двигатель",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Лампу накаливания",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Радио",
        isCorrect: false,
      }
    ]
  },
  {
    id: 79,
    question: "Кто открыл икс лучи",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Анри Беккерель",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Пьер Кюри",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Макс Планк",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Вильгельм Рентген",
        isCorrect: true,
      }
    ]
  },
  {
    id: 80,
    question: "Основы чего заложил Чарльз Дарвин",
    complexity: 1,
    answers: [
      {
        id: 1,
        content: "Теория эволюции",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Квантовая механика",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Закон сохранения энергии",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Двойная спираль ДНК",
        isCorrect: false,
      }
    ]
  },
  {
    id: 81,
    question: "Кто доказал, что Земля вращается вокруг Солнца",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "Аристотель",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Николай Коперник",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Птолемей",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Галилео Галилей",
        isCorrect: false,
      }
    ]
  },
  {
    id: 82,
    question: "Что открыл Александр Флеминг",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "Вакцину от бешенства",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Аспирин",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Пенициллин",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Инсулин",
        isCorrect: false,
      }
    ]
  },
  {
    id: 83,
    question: "Кто сформулировал законы движения планет",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "Исаак Ньютон",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Галилео Галилей",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Тихо Браге",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Иоганн Кеплер",
        isCorrect: true,
      }
    ]
  },
  {
    id: 84,
    question: "Какое открытие сделали Уотсон и Крик",
    complexity: 9,
    answers: [
      {
        id: 1,
        content: "Двойная спираль ДНК",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Структура атома",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Синтез белка",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Клонирование",
        isCorrect: false,
      }
    ]
  },
  {
    id: 85,
    question: "Кто открыл электрон",
    complexity: 9,
    answers: [
      {
        id: 1,
        content: "Эрнест Резерфорд",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Джозеф Томсон",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Джеймс Максвелл",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Нильс Бор",
        isCorrect: false,
      }
    ]
  },
  {
    id: 86,
    question: "Какой учёный открыл радиоактивность",
    complexity: 9,
    answers: [
      {
        id: 1,
        content: "Мария Кюри",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Альберт Эйнштейн",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Анри Беккерель",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Энрико Ферми",
        isCorrect: false,
      }
    ]
  },
  {
    id: 87,
    question: "Кто автор теории относительности",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Стивен Хокинг",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Макс Планк",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Вернер Гейзенберг",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Альберт Эйнштейн",
        isCorrect: true,
      }
    ]
  },
  {
    id: 88,
    question: "В каком году началась Гражданская война в США",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "1861",
        isCorrect: true,
      },
      {
        id: 2,
        content: "1859",
        isCorrect: false,
      },
      {
        id: 3,
        content: "1865",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1863",
        isCorrect: false,
      }
    ]
  },
  {
    id: 89,
    question: "Какие два союза противостояли в гражданской войне в США",
    complexity: 5,
    answers: [
      {
        id: 1,
        content: "Север vs. Запад",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Союз vs. Конфедерация",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Республиканцы vs. Демократы",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Федералисты vs. Антифедералисты",
        isCorrect: false,
      }
    ]
  },
  {
    id: 90,
    question: "Какой президент США возглавлял страну во время граданской войны",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Джордж Вашингтон",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Томас Джефферсон",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Авраам Линкольн",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Эндрю Джексон",
        isCorrect: false,
      }
    ]
  },
  {
    id: 91,
    question: "Какое событие стало переломным в гражданской войне в США",
    complexity: 10,
    answers: [
      {
        id: 1,
        content: "Битва при Булл-Ране",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Осада Винчестера",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Сражение при Антиетаме",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Битва при Геттисберге",
        isCorrect: true,
      }
    ]
  },
  {
    id: 92,
    question: "Какой документ провозгласил отмену рабства",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Прокламация об освобождении",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Декларация независимости",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Билль о правах",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Конституция Конфедерации",
        isCorrect: false,
      }
    ]
  },
  {
    id: 93,
    question: "Кто был первым президентом США",
    complexity: 2,
    answers: [
      {
        id: 1,
        content: "Томас Джефферсон",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Джордж Вашингтон",
        isCorrect: true,
      },
      {
        id: 3,
        content: "Бенджамин Франклин",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Джон Адамс",
        isCorrect: false,
      }
    ]
  },
  {
    id: 94,
    question: "Какой был автором текста Декларации независимости",
    complexity: 4,
    answers: [
      {
        id: 1,
        content: "Авраам Линкольн",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Джеймс Мэдисон",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Томас Джефферсон",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Джордж Вашингтон",
        isCorrect: false,
      }
    ]
  },
  {
    id: 95,
    question: "Когда была подписана Декларация независимости",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "17 сентября 1787 года",
        isCorrect: false,
      },
      {
        id: 2,
        content: "3 сентября 1783 года",
        isCorrect: false,
      },
      {
        id: 3,
        content: "19 апреля 1775 года",
        isCorrect: false,
      },
      {
        id: 4,
        content: "4 июля 1776 года",
        isCorrect: true,
      }
    ]
  },
  {
    id: 96,
    question: "Кто является основателем москвы",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Юрий Долгорукий",
        isCorrect: true,
      },
      {
        id: 2,
        content: "Ярослав Мудрый",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Дмитрий Донской",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Вещий Олег",
        isCorrect: false,
      }
    ]
  },
  {
    id: 97,
    question: "В каком году прошли первые олимпийские игры",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "1892",
        isCorrect: false,
      },
      {
        id: 2,
        content: "1896",
        isCorrect: true,
      },
      {
        id: 3,
        content: "1900",
        isCorrect: false,
      },
      {
        id: 4,
        content: "1904",
        isCorrect: false,
      }
    ]
  },
  {
    id: 98,
    question: "Кто из этих учёных жил в эпоху Просвещения",
    complexity: 7,
    answers: [
      {
        id: 1,
        content: "Архимед",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Исаак Ньютон",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Дени Дидро",
        isCorrect: true,
      },
      {
        id: 4,
        content: "Галилео Галилей",
        isCorrect: false,
      }
    ]
  },
  {
    id: 99,
    question: "Кто изобрёл бумагу",
    complexity: 3,
    answers: [
      {
        id: 1,
        content: "Египтяне",
        isCorrect: false,
      },
      {
        id: 2,
        content: "Шумеры",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Греки",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Китайцы",
        isCorrect: true,
      }
    ]
  },
  {
    id: 100,
    question: "Какая шифровальная машина использовалась немцами во время второй мировой войны",
    complexity: 6,
    answers: [
      {
        id: 1,
        content: "Энигма",
        isCorrect: true,
      },
      {
        id: 2,
        content: "М-209",
        isCorrect: false,
      },
      {
        id: 3,
        content: "Агат",
        isCorrect: false,
      },
      {
        id: 4,
        content: "Фиалка",
        isCorrect: false,
      }
    ]
  }
]