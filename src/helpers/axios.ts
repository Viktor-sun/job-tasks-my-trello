import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import { store } from "../redux/store";
import { usersActions } from "../redux/actions";
import { IAction } from "../interfaces";

const API_URL = "http://localhost:8050/api";

const customApi: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

customApi.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

customApi.interceptors.response.use(
  (config: AxiosResponse) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const data = await axios.get(`${API_URL}/users/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", data.data.data.accessToken);
        return customApi.request(originalRequest);
      } catch (e) {
        console.log("%cunauthorized\n", "color:tomato; font-size: 15px", e);
        store.dispatch<IAction<any>>(usersActions.logout.Success());
      }
    }

    throw error;
  }
);

export { customApi };
