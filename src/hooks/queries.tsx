import { Champion } from "@/types/Champion";
import { getChampionData, getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

export const useChampions = () => {
  return useQuery<Champion[]>({
    queryKey: ["ChampionList"],
    queryFn: getChampionData,
  });
};

export const useChampionRotationList = () => {
  return useQuery<number[]>({
    queryKey: ["ChampionRotationList"],
    queryFn: getChampionRotation,
  });
};
