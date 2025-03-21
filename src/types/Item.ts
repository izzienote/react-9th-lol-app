export interface ItemType {
  name: string;
  description: string;
  plaintext: string;
  into: string[];
  image: ItemImage;
  gold: ItemGold;
  tags: string[];
  maps: ItemMaps;
  stats: ItemStats;
}

interface ItemImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface ItemGold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

interface ItemMaps {
  [key: number]: boolean;
}

interface ItemStats {
  FlatMovementSpeedMod: number;
}
