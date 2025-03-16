import { Champion, ChampionDetail } from "@/types/Champion";
import { ItemType } from "@/types/Item";

export const CHAMPIONS_BASE_URL = `${process.env.NEXT_PUBLIC_CHAMPION_URL}`;
export const ITEMS_BASE_URL = `${process.env.NEXT_PUBLIC_ITEM_URL}`;

// [1] 챔피언 목록 데이터 (ISR)
export const fetchChampionList = async () => {
  //process.env로 env.local에 있는 환경변수 사용
  const res = await fetch(CHAMPIONS_BASE_URL, {
    next: {
      revalidate: 86400,
    },
  });
  const { data } = await res.json();
  const championData: Champion[] = Object.values(data);
  return championData;
};

// [2] 아이템 목록 데이터 (SSG)
export const fetchItemList = async () => {
  //process.env로 env.local에 있는 환경변수 사용
  const res = await fetch(ITEMS_BASE_URL, {
    cache: "force-cache",
  });
  const { data } = await res.json();
  const itemList: ItemType[] = Object.values(data);
  return itemList;
};

// [3] 챔피언 상세페이지 데이터 (SSR)
export const fetchChampionDetail = async (id: string) => {
  //process.env로 env.local에 있는 환경변수 사용

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const { data } = await res.json();
  const detailList: ChampionDetail[] = Object.values(data);
  return detailList[0];
};
