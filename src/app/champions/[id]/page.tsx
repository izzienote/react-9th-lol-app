import SpellCard from "@/components/SpellCard";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

export type Props = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: "챔피언 상세 페이지",
  description: "선택한 챔피언의 상세정보를 확인할 수 있습니다",
};

const ChampionDetailPage = async ({ params }: Props) => {
  const fetchData = await fetchChampionDetail(params.id);

  return (
    <div className="bg-black">
      <div className="text-red-500">{fetchData.name}</div>
      <div className="text-yellow-500">{fetchData.title}</div>
      <Image
        width={100}
        height={100}
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${fetchData.image.full}`}
        alt="챔피언 이미지"
      />
      <div className="text-white">{fetchData.blurb}</div>
      <div className="text-yellow-500">{fetchData.name}의 스킬</div>
      <div className="grid grid-cols-1">
        {fetchData.spells.map((spell) => (
          <SpellCard key={spell.id} data={spell} />
        ))}
      </div>
    </div>
  );
};

export default ChampionDetailPage;
