import { FunctionComponent } from "react";
import { AiFillHome, AiFillBook } from "react-icons/ai";
import { PiPencilFill } from "react-icons/pi";
import { SharedButton, SharedInput, SharedInternalLink } from "..";
import { cssObj } from "./style.css";
import { useForm } from "react-hook-form";

/* TODO: 모바일 반응형 */
export const SharedNavBar: FunctionComponent = () => {
  const { register, formState } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      keyword: "",
    },
  });

  return (
    <div className={cssObj.containerWrapper}>
      <div className={cssObj.accountContainer}>nahsooyeon@gmail.com</div>
      <div className="p-8">
        <SharedInput
          registerObj={register("keyword", {
            minLength: 1,
          })}
          formState={formState}
          size="medium"
          type="Text"
          placeholder="Search"
        />
      </div>
      <div className={cssObj.menuContainer}>
        {/* FIXME: map */}
        <SharedInternalLink size="small" icon={<AiFillHome />} type="link" text="홈" link="/" theme="primary" />
        <SharedInternalLink
          size="small"
          icon={<AiFillBook />}
          type="link"
          text="내가 쓴 일기"
          link="/my"
          theme="primary"
        />
        <SharedInternalLink
          size="small"
          icon={<PiPencilFill />}
          type="link"
          link="/write"
          text="일기 쓰기"
          theme="primary"
        />
        <SharedInternalLink size="small" text="로그인" type="link" link={"/login"} theme="primary" />
        <SharedButton text="회원가입" action="submit" theme="primary" size="medium" />
      </div>
    </div>
  );
};
