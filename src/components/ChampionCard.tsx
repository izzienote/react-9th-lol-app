import { CHAMPION_IMAGE_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ChampionProps = {
  data: Champion;
};

const ChampionCard = ({ data }: ChampionProps) => {
  return (
    <Link href={`/champions/${data.id}`}>
      <article className="flex flex-col justify-center items-center border rounded p-4 hover:shadow-lg">
        <figure>
          <Image
            width={100}
            height={100}
            src={`${CHAMPION_IMAGE_URL}${data.image.full}`}
            alt="챔피언 이미지"
          />
        </figure>
        <div className="text-red-500">{data.name}</div>
        <div className="text-white">{data.title}</div>
      </article>
    </Link>
  );
};

export default ChampionCard;
