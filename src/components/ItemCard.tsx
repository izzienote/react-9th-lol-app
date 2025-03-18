import { ITEM_IMAGE_URL } from "@/constants";
import { ItemType } from "@/types/Item";
import Image from "next/image";

type ItemProps = {
  item: ItemType;
};

const ItemCard = ({ item }: ItemProps) => {
  //HTML 태그들 제거하고 필요한 문자만 반환하기!
  const cleanText = item.description.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <article className="flex flex-col justify-start items-center border-4 border-yellow bg-yellowbrown rounded p-4 hover:shadow-lg max-h-96 overflow-y-auto active:scale-105 ease-in-out duration-200">
      <figure>
        <Image
          width={100}
          height={100}
          src={`${ITEM_IMAGE_URL}${item.image.full}`}
          alt="아이템 이미지"
          priority
        />
      </figure>
      <div className="text-red text-lg mt-5 mb-5">{item.name}</div>
      <div className="text-green">살때 : {item.gold.total}</div>
      <div className="text-green">팔때 : {item.gold.sell}</div>
      <div className="text-purple">{cleanText}</div>
    </article>
  );
};

export default ItemCard;
