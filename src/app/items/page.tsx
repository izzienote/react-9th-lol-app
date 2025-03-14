import ItemCard from "@/components/ItemCard";
import { fetchItemList } from "@/utils/serverApi";

const ItemList = async () => {
  // 아이템 목록 데이터 가져오기 (SSG)
  const itemList = await fetchItemList();

  return (
    <div className=" bg-black">
      <h1 className="text-red-500">아이템 목록</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5">
        {itemList.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
