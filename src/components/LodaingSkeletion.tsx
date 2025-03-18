import Image from "next/image";
import Logo from "../public/lol5.png";

const LodaingSkeletion = () => {
  return (
    <div className="bg-darkblue2 w-full h-screen flex flex-col justify-center items-center">
      <Image src={Logo} alt="로고 이미지" height={200} width={400} />
      <h1 className="text-white">
        데이터를 불러오는 중입니다....잠시만 기다려주세요!
      </h1>
    </div>
  );
};

export default LodaingSkeletion;
