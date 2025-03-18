import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "챔피언 목록 페이지",
  description: "모든 챔피언 목록을 확인할 수 있습니다",
};

const ChampionList = async () => {
  // 챔피언 데이터 가져오기 (ISR)
  const championListData = await fetchChampionList();

  return (
    <div className=" bg-darkblue2 py-20">
      <h1 className="text-red text-2xl flex justify-center mb-10">
        챔피언 목록
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5 px-10 ">
        {championListData.map((champion) => (
          <ChampionCard key={champion.id} data={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionList;
