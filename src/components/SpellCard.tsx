import { SKILL_IMAGE_URL } from "@/constants";
import { ChampionSpell } from "@/types/Champion";
import Image from "next/image";
import React from "react";

const SpellCard = ({ data }: { data: ChampionSpell }) => {
  return (
    <article className="flex flex-col justify-start items-center border border-yellow rounded p-4 hover:shadow-lg mb-5 active:scale-105 ease-in-out duration-200 px-10">
      <div className="text-white text-xl">{data.name}</div>
      <figure>
        <Image
          width={100}
          height={100}
          src={`${SKILL_IMAGE_URL}${data.image.full}`}
          alt={data.name}
          className="mb-5 mt-5"
        />
      </figure>
      <div className="text-red">{data.description}</div>
    </article>
  );
};

export default SpellCard;
