import { SubmitHandler, useForm } from "react-hook-form";
import { NextPageWithLayout } from "@/types/pageLayoutType";
import { usePostLogin } from "apis";
import { LoginReqDTO } from "dto";
import { SharedInput, SharedPageLayout } from "@/components/index";

const LoginPage: NextPageWithLayout = () => {
  const { register, handleSubmit, watch, formState, reset } = useForm<LoginReqDTO>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      password: "",
    },
  });
  const { mutate: loginMutate } = usePostLogin();

  const submitHandler: SubmitHandler<LoginReqDTO> = (loginObj) => {
    loginMutate(loginObj, {
      onSuccess: (data) => {
        window.localStorage.setItem("access_token", data.data.token);
        window.location.href = "/";
      },
      onError: () => {
        reset({ name: watch("name") });
        reset({ name: watch("password") });
      },
    });
  };

  return (
    <SharedPageLayout>
      <div className="flex h-screen w-screen items-center justify-center">
        <form className="flex flex-col items-center gap-1.5" onSubmit={handleSubmit(submitHandler)}>
          <SharedInput
            label="아이디"
            size={["medium", "medium"]}
            registerObj={register("name", {
              required: "아이디를 입력해주세요.",
              minLength: 1,
            })}
            formState={formState}
            type="text"
            placeholder="아이디"
          />
          <SharedInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            size={["medium", "medium"]}
            formState={formState}
            registerObj={register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: 1,
            })}
          />
          <button type="submit">로그인</button>
        </form>
      </div>
    </SharedPageLayout>
  );
};

export default LoginPage;
