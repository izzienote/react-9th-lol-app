import { Champion, ChampionDetail } from "@/types/Champion";
import { ItemType } from "@/types/Item";

export const LATEST_VERSION_URL = `${process.env.NEXT_PUBLIC_LATEST_VERSION_URL}`;

type Version = string[];

// [0] 최신 버전 가져오기
export const fetchLatestVersion = async () => {
  try {
    const res = await fetch(LATEST_VERSION_URL);
    const data: Version = await res.json();
    return data[0];
  } catch (error) {
    throw error;
  }
};

// [1] 챔피언 목록 데이터 (ISR)
export const fetchChampionList = async () => {
  try {
    const version = await fetchLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );
    const { data } = await res.json();
    const championData: Champion[] = Object.values(data);
    return championData;
  } catch (error) {
    throw error;
  }
};

// [2] 아이템 목록 데이터 (SSG)
export const fetchItemList = async () => {
  try {
    const version = await fetchLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
      {
        cache: "force-cache",
      }
    );
    const { data } = await res.json();
    const itemList: ItemType[] = Object.values(data);
    return itemList;
  } catch (error) {
    throw error;
  }
};

// [3] 챔피언 상세페이지 데이터 (SSR)
export const fetchChampionDetail = async (id: string) => {
  try {
    const version = await fetchLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
      {
        cache: "no-store",
      }
    );
    const { data } = await res.json();
    const detailList: ChampionDetail[] = Object.values(data);
    return detailList[0];
  } catch (error) {
    throw error;
  }
};
