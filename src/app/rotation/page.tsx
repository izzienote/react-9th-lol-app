"use client";

import ChampionCard from "@/components/ChampionCard";
import { useChampionRotationList, useChampions } from "@/hooks/queries";

const ChampionRotation = () => {
  // [1] 챔피언 리스트 데이터 (key값과 일치하는 데이터를 가져오기 위해서 받아옴)
  const { data: championList, isPending, isError } = useChampions();

  // [2] 이번주 무료 챔피언 키값 가져오기
  const {
    data: championRotationList,
    isPending: isPendingRotation,
    isError: isErrorRotation,
  } = useChampionRotationList();

  // isPending, isError 처리로 undefined 안뜨도록 설정
  if (isPending || isPendingRotation) {
    return <div>로딩중입니다...</div>;
  }

  if (isError || isErrorRotation) {
    return <div>오류가 발생했습니다.</div>;
  }

  // [3] 이번주 무료챔피언에 있는 키값과 일치하는 데이터 반환하기
  const freeChampions = championList.filter(
    (champion) => championRotationList.includes(parseInt(champion.key))
    //넘버와 문자열(숫자로 변환)로 된 key값 통일해서 비교
  );

  return (
    <div className=" bg-black">
      <h1 className="text-red-500">이번주 로테이션 챔피언 보기</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5">
        {freeChampions.map((data) => (
          <ChampionCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ChampionRotation;
