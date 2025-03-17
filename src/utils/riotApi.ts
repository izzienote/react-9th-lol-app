import { Champion } from "@/types/Champion";
import { CHAMPIONS_BASE_URL } from "./serverApi";
import { ChampionRotationNumber } from "@/types/ChampionRotation";

const API_ROTATION = "/api/rotation";

export const getChampionData = async () => {
  const res = await fetch(CHAMPIONS_BASE_URL);
  const { data }: { data: Champion[] } = await res.json();
  return Object.values(data);
};

export const getChampionRotation = async () => {
  const res = await fetch(API_ROTATION);
  const { data }: { data: ChampionRotationNumber } = await res.json();
  return data.freeChampionIds;
};
