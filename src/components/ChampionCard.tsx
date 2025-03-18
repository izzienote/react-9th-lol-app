import { CHAMPION_IMAGE_URL, CHAMPION_PAGE } from "@/constants";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ChampionProps = {
  data: Champion;
};

const ChampionCard = ({ data }: ChampionProps) => {
  return (
    <Link href={`${CHAMPION_PAGE}/${data.id}`}>
      <article className="flex flex-col justify-center items-center border-4 border-skyblue bg-darkblue rounded p-4 hover:shadow-lg active:scale-105 ease-in-out duration-200">
        <figure>
          <Image
            width={100}
            height={100}
            src={`${CHAMPION_IMAGE_URL}${data.image.full}`}
            alt="챔피언 이미지"
            priority
          />
        </figure>
        <div className="text-red text-xl mt-5">{data.name}</div>
        <div className="text-white">{data.title}</div>
      </article>
    </Link>
  );
};

export default ChampionCard;
