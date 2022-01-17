import axios from "axios";

const API_URL = "http://localhost:8050/api";

const customApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

customApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

customApi.interceptors.response.use(
  (config) => config,
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
        console.log(e);
        console.log("not auth");
      }
    }

    throw error;
  }
);

export { customApi };
