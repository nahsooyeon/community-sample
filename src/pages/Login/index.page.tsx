import { usePostLogin } from "apis";
import { LoginReqDTO } from "dto";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginPage = () => {
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

  const errorMessage =
    formState.errors[
      register("name", {
        required: "아이디를 입력해주세요.",
        minLength: 1,
      }).name
    ] &&
    (formState.errors[
      register("name", {
        required: "아이디를 입력해주세요.",
        minLength: 1,
      }).name
    ]?.message as string);

  return (
    <div>
      로그인 페이지
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("name", {
            required: "아이디를 입력해주세요.",
            minLength: 1,
          })}
          type="text"
          placeholder="아이디"
        />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};

export default LoginPage;
