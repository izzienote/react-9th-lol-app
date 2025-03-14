import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";

const ChampionList = async () => {
  // 챔피언 데이터 가져오기 (ISR)
  const championListData = await fetchChampionList();

  return (
    <div className=" bg-black">
      <h1 className="text-red-500">챔피언 목록</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5">
        {championListData.map((champion) => (
          <ChampionCard key={champion.id} data={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionList;
