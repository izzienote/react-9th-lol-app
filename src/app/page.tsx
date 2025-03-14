import Image from "next/image";
import ChampionListImage from "../public/lol3.webp";
import ItemListImage from "../public/lol2.jpg";
import ChampionRotationImage from "../public/lol1.jpg";
import Link from "next/link";

const imageSize = {
  sm: 300,
  md: 600,
  lg: 900,
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-black gap-5">
      <h1 className="text-red-500 font-extrabold">리그 오브 레전드 정보 앱</h1>
      <p className="text-gray-500">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <Link href={"/champions"}>
        <Image
          width={imageSize.md}
          src={ChampionListImage}
          alt="챔피언 목록 보러가기 이미지"
        />
        <div className="text-white">챔피언 목록보기</div>
      </Link>

      <Link href={"/rotation"}>
        <Image
          width={imageSize.md}
          src={ItemListImage}
          alt="금주 로테이션 보러가기 이미지"
        />
        <div className="text-white">금주 로테이션 확인</div>
      </Link>

      <Link href={"/items"}>
        <Image
          width={imageSize.md}
          src={ChampionRotationImage}
          alt="아이템 목록 보러가기 이미지"
        />
        <div className="text-white">게임 아이템 정보보기</div>
      </Link>
    </div>
  );
}
