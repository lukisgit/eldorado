export enum GAME {
  ROCKET_LEAGUE = 'rocket-league',
  FORTNITE = 'fortnite',
  PATH_OF_EXILE = 'path-of-exile',
  WORLD_OF_WARCRAFT = 'world-of-warcraft',
  CSGO = 'csgo'
}

export const GAMES: { id: GAME, label: string }[] = [
  { id: GAME.ROCKET_LEAGUE, label: 'Rocket league' },
  { id: GAME.FORTNITE, label: 'Fortnite' },
  { id: GAME.PATH_OF_EXILE, label: 'Path of exile' },
  { id: GAME.WORLD_OF_WARCRAFT, label: 'World of warcraft' },
  { id: GAME.CSGO, label: 'CSGO' },
];
