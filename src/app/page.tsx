import Image from "next/image";
import ChampionListImage from "../public/lol3.webp";
import ItemListImage from "../public/lol2.jpg";
import ChampionRotationImage from "../public/lol1.jpg";
import Link from "next/link";
import { CHAMPION_PAGE, ITEM_PAGE, ROTATION_PAGE } from "@/constants";
import DarkModeButton from "@/components/DarkModeButton";

const imageSize = {
  sm: 300,
  md: 600,
  lg: 900,
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-darkblue2 gap-10 py-20  px-10">
      <h1 className="text-red text-2xl font-extrabold">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-gray">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <Link href={CHAMPION_PAGE}>
        <Image
          width={imageSize.md}
          src={ChampionListImage}
          alt="챔피언 목록 보러가기 이미지"
          className="border-4 border-skyblue rounded-2xl active:scale-105 ease-in-out duration-300"
        />
        <div className="py-2 rounded-md bg-skyblue text-white text-lg flex justify-center mt-5 mb-20 hover:bg-black">
          챔피언 목록보기
        </div>
      </Link>

      <Link href={ROTATION_PAGE}>
        <Image
          width={imageSize.md}
          src={ItemListImage}
          alt="금주 로테이션 보러가기 이미지"
          className="border-4 border-skyblue rounded-2xl active:scale-105 ease-in-out duration-300"
        />
        <div className="py-2 rounded-md bg-skyblue text-white text-lg flex justify-center mt-5 mb-20">
          금주 로테이션 확인
        </div>
      </Link>

      <Link href={ITEM_PAGE}>
        <Image
          width={imageSize.md}
          src={ChampionRotationImage}
          alt="아이템 목록 보러가기 이미지"
          className="border-4 border-skyblue rounded-2xl active:scale-105 ease-in-out duration-300"
        />
        <div className="py-2 rounded-md bg-skyblue text-white text-lg flex justify-center mt-5 mb-20">
          게임 아이템 정보보기
        </div>
      </Link>

      <DarkModeButton />
    </div>
  );
}
