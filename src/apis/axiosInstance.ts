import axios, { AxiosError, isAxiosError } from "axios";

const instance = axios.create({
  baseURL: "localhost:4000",
  withCredentials: true,
});

const createInstance = () => {
  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => (isAxiosError(error) ? Promise.reject(error) : Promise.reject(error))
  );
  return instance;
};

export const unAuthorizedInstance = createInstance();
