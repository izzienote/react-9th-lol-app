import ItemCard from "@/components/ItemCard";
import { fetchItemList } from "@/utils/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "아이템 목록 페이지",
  description: "모든 아이템 목록을 확인할 수 있습니다",
};

const ItemList = async () => {
  // 아이템 목록 데이터 가져오기 (SSG)
  const itemList = await fetchItemList();

  return (
    <div className=" bg-black py-20">
      <h1 className="text-red text-2xl flex justify-center mb-10">
        아이템 목록
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5 px-10">
        {itemList.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
