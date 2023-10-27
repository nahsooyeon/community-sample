import { useMutation } from "@tanstack/react-query";
import { unAuthorizedInstance } from "apis";
import { AxiosResponse, AxiosError } from "axios";
import { LoginReqDTO, LoginResDTO } from "dto";

const postLogin = async (requestData: LoginReqDTO) => {
  const { data } = await unAuthorizedInstance.post("/login", requestData);
  return data;
};

export const usePostLogin = () => useMutation<AxiosResponse<LoginResDTO>, AxiosError, LoginReqDTO>(postLogin);
