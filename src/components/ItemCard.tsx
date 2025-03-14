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
    <article className="flex flex-col justify-start items-center border rounded p-4 hover:shadow-lg max-h-96 overflow-y-auto">
      <figure>
        <Image
          width={100}
          height={100}
          src={`${ITEM_IMAGE_URL}${item.image.full}`}
          alt="아이템 이미지"
        />
      </figure>
      <div className="text-red-500">{item.name}</div>
      <div className="text-green-500">살때 : {item.gold.total}</div>
      <div className="text-green-500">팔때 : {item.gold.sell}</div>
      <div className="text-purple-500">{cleanText}</div>
    </article>
  );
};

export default ItemCard;
