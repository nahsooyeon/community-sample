import { FunctionComponent } from "react";
import { AiFillHome, AiFillBook } from "react-icons/ai";
import { PiPencilFill } from "react-icons/pi";
import { SharedInput, SharedInternalLink, SharedTextButton } from "..";

/* TODO: 모바일 반응형 */
export const SharedNavBar: FunctionComponent = () => (
  <div className="flex h-794 w-266 shrink-0 flex-col border-r">
    <div className="p-16">nahsooyeon@gmail.com</div>
    <div className="p-8">
      <SharedInput size={["medium", "medium"]} placeholder="Search" />
    </div>
    <div className="flex flex-col items-center justify-center">
      {/* FIXME: map */}
      <SharedInternalLink icon={<AiFillHome />} type="link" text="홈" link="/" theme="PRIMARY" />
      <SharedInternalLink icon={<AiFillBook />} type="link" text="내가 쓴 일기" link="/my" theme="PRIMARY" />
      <SharedInternalLink icon={<PiPencilFill />} type="link" link="/write" text="일기 쓰기" theme="PRIMARY" />
      <SharedInternalLink text="로그인" type="button" link={"/login"} theme={"PRIMARY"} />
      <SharedTextButton text="로그아웃" status={"PRIMARY"} size={["medium", "small"]} action={"submit"} />
    </div>
  </div>
);
