import { Metadata } from "next";

export const metadata: Metadata = {
  title: "챔피언 로테이션 페이지",
  description: "이번주 무료로 플레이 가능한 챔피언 목록을 확인할 수 있습니다",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default layout;
