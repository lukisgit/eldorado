import { GAME } from './app/constants/games';

export const DB = {
  [GAME.ROCKET_LEAGUE]: {
    image_url: `/assets/images/game-cards/${GAME.ROCKET_LEAGUE}.jpg`,
    attributes: {
      rarity: ['exotic', 'rare', 'common'],
      category: ['wheels', 'explosions', 'antennas'],
    },
    items: {
      'alpha reward wheels': {
        id: '1f30e23941116b9b4accd0e195fb83fa',
        image_url:
          'https://steamuserimages-a.akamaihd.net/ugc/93850391744118617/076FB4CF9E0B72961F078231BB1D3CBB51ACCC25/',
        attributes: {
          rarity: 'exotic',
          category: 'wheels',
        },
      },
      'ninja wheels': {
        id: '5a0a4b4853879d8620f4aff4f32dd6cc',
        image_url:
          'https://vignette.wikia.nocookie.net/rocketleague/images/a/a8/Ninja_wheel_icon.png/revision/latest/scale-to-width-down/340?cb=20170602230745',
        attributes: {
          rarity: 'rare',
          category: 'wheels',
        },
      },
    },
  },
  [GAME.CSGO]: {
    image_url: `/assets/images/game-cards/${GAME.CSGO}.jpg`,
    attributes: {
      wear: ['factory new', 'minimal wear', 'battle scarred'],
    },
    items: {
      'butterfly knife': {
        id: '622e9c1c88f99d7946ab8a452935a3c4',
        image_url:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cyhW-NmkkoyS2aCtZ-qFwW4JvMQlj7CVp9qn2Aaw_0ZtZ2z6JYbGIFQ-YV_X81btlOvxxcjrQyWGkSc/360fx360f',
        attributes: {
          wear: 'minimal wear',
        },
      },
      awp: {
        id: '95986952c7533ef62e4bfc31a162ffff',
        image_url:
          'https://i.pinimg.com/originals/75/08/4e/75084e249b00a49f3adf6b1c926e03f7.png',
        attributes: {
          wear: 'minimal wear',
        },
      },
    },
  },
  [GAME.FORTNITE]: {
    image_url: `/assets/images/game-cards/${GAME.PATH_OF_EXILE}.jpg`,
    attributes: {
      wear: ['factory new', 'minimal wear', 'battle scarred'],
    },
    items: {
      'tactical shotgun': {
        id: '6a22e7b5eef4222199dbcb752ce244cd',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/7/7d/Chapter2tac.png/revision/latest?cb=20191016162745',
        attributes: {
          wear: 'minimal wear',
        },
      },
      'butterfly knives': {
        id: 'd171ac994327ce7b09375fb97da80668',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/d/da/Butterfly_Knives.png/revision/latest?cb=20200504184651',
        attributes: {
          wear: 'battle scarred',
        },
      },
    },
  },
  [GAME.PATH_OF_EXILE]: {
    image_url: `/assets/images/game-cards/${GAME.PATH_OF_EXILE}.jpg`,
    attributes: {
      wear: ['factory new', 'minimal wear', 'battle scarred'],
    },
    items: {
      'tactical shotgun': {
        id: '4029159adfb3192a7b342e29091b47fa',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/7/7d/Chapter2tac.png/revision/latest?cb=20191016162745',
        attributes: {
          wear: 'minimal wear',
        },
      },
      'butterfly knives (factory new)': {
        id: 'e7be02b097d9410243122fe06370bea9',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/d/da/Butterfly_Knives.png/revision/latest?cb=20200504184651',
        attributes: {
          wear: 'factory new',
        },
      },
      'butterfly knives (battle scarred)': {
        id: 'a1351e6ad5c8e4d25e0d7864cdb452bb',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/d/da/Butterfly_Knives.png/revision/latest?cb=20200504184651',
        attributes: {
          wear: 'battle scarred',
        },
      },
    },
  },
  [GAME.WORLD_OF_WARCRAFT]: {
    image_url: `/assets/images/game-cards/${GAME.PATH_OF_EXILE}.jpg`,
    attributes: {
      wear: ['factory new', 'minimal wear', 'battle scarred'],
    },
    items: {
      'tactical shotgun': {
        id: 'ff6b9618673d5919dfa3a432461a4c16',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/7/7d/Chapter2tac.png/revision/latest?cb=20191016162745',
        attributes: {
          wear: 'minimal wear',
        },
      },
      'butterfly knives (factory new)': {
        id: '9764ef036d6df32316bf7fddd225dbe7',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/d/da/Butterfly_Knives.png/revision/latest?cb=20200504184651',
        attributes: {
          wear: 'factory new',
        },
      },
      'butterfly knives (battle scarred)': {
        id: '4cd85f533ed72f1da058000d0bfe63d0',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/d/da/Butterfly_Knives.png/revision/latest?cb=20200504184651',
        attributes: {
          wear: 'battle scarred',
        },
      },
      'butterfly knives 2 (battle scarred)': {
        id: '7dea8cccd55486b022303da87120313f',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/d/da/Butterfly_Knives.png/revision/latest?cb=20200504184651',
        attributes: {
          wear: 'battle scarred',
        },
      },
      'butterfly knives 3 (battle scarred)': {
        id: '5adbc9b1471a0e9ec2a046bf0a8080df',
        image_url:
          'https://vignette.wikia.nocookie.net/fortnite/images/d/da/Butterfly_Knives.png/revision/latest?cb=20200504184651',
        attributes: {
          wear: 'battle scarred',
        },
      },
    },
  },
};

export const DB_OFFERS = [
  {
    id: '1f30e23941116b9b4accd0e195fb83fa',
    offers: [
      { user: 'tom14', price: 102 },
      { user: 'denny', price: 110 },
      { user: 'alice1', price: 108 },
    ],
  },
  {
    id: '5a0a4b4853879d8620f4aff4f32dd6cc',
    offers: [
      { user: 'tom14', price: 88 },
      { user: 'alice1', price: 90 },
    ],
  },
  {
    id: '6a22e7b5eef4222199dbcb752ce244cd',
    offers: [
      { user: 'tom14', price: 250 },
      { user: 'alice1', price: 205 },
    ],
  },
  {
    id: '622e9c1c88f99d7946ab8a452935a3c4',
    offers: [
      { user: 'tom14', price: 250 },
      { user: 'alice1', price: 205 },
      { user: 'alice2', price: 205 },
      { user: 'alice3', price: 305 },
      { user: 'alice4', price: 505 },
    ],
  },
];
