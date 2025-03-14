import { SKILL_IMAGE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

const SpellCard = ({ data }: { data: ChampionSpell }) => {
  return (
    <article className="flex flex-col justify-start items-center border rounded p-4 hover:shadow-lg">
      <div className="text-red-500">{data.name}</div>
      <figure>
        <Image
          width={100}
          height={100}
          src={`${SKILL_IMAGE_URL}${data.image.full}`}
          alt={data.name}
        />
      </figure>
      <div className="text-red-500">{data.description}</div>
    </article>
  );
};

export default SpellCard;
