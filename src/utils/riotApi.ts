import { Champion } from "@/types/Champion";
import { ChampionRotationNumber } from "@/types/ChampionRotation";
import { fetchLatestVersion } from "./serverApi";

const API_ROTATION = "/api/rotation";

export const getChampionData = async () => {
  try {
    const version = await fetchLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );
    const { data }: { data: Champion[] } = await res.json();
    return Object.values(data);
  } catch (error) {
    throw error;
  }
};

export const getChampionRotation = async () => {
  try {
    const res = await fetch(API_ROTATION);
    const { data }: { data: ChampionRotationNumber } = await res.json();
    return data.freeChampionIds;
  } catch (error) {
    throw error;
  }
};
