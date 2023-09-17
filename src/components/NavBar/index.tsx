import { FunctionComponent } from "react";
import { SharedInput } from "..";
import Link from "next/link";

/* TODO: 모바일 반응형 */
export const SharedNavBar: FunctionComponent = () => (
  <div className="flex h-794 w-266 shrink-0 flex-col border-r border-GREY_20">
    <div className="p-16">nahsooyeon@gmail.com</div>
    <div className="p-8">
      <SharedInput size={["medium", "medium"]} placeholder="Search" />
    </div>
    <div className="flex flex-col">
      <Link href="/">홈</Link>
      <Link href="/my">내가 쓴 일기</Link>
      <Link href="/write">일기쓰기</Link>
      <button>로그아웃</button>
    </div>
  </div>
);
