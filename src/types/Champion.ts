type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: string[];
  partype: string;
  stats: Stats;
};

type Info = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

type Image = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Stats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};
//챔피언 디테일 페이지용 타입
type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  blurb: string;
  image: Image;
  spells: ChampionSpell[];
};
//챔피언 디테일 페이지용 스펠
type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  image: Image;
};
