import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import NotificationService from "../toastify/notificationService";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const instance = axios.create({
  baseURL: 'https://api-aqu.p-e.kr',
  headers: {
    Accept: "application/json, text/plain, */*, multipart/form-data",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (originalRequest.data instanceof FormData) {
      originalRequest.headers["Content-Type"] = "multipart/form-data";
    } else {
      originalRequest.headers["Content-Type"] = "application/json";
    }
    if (originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("REFRESH_TOKEN");
      if (refreshToken) {
        axios
          .post('https://api-aqu.p-e.kr/auth/refresh', {
            refreshToken,
          })
          .then((response) => {
            const newAccessToken = response.data.accessToken;
            const newRefreshToken = response.data.refreshToken;

            localStorage.setItem("ACCESS_TOKEN", newAccessToken);
            localStorage.setItem("REFRESH_TOKEN", newRefreshToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          })
          .catch((refreshError) => {
            NotificationService.error("토큰이 만료되었습니다.");
            setTimeout(() => {
              window.location.href = "/login";
            }, 100);
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.removeItem("REFRESH_TOKEN");
            return Promise.reject(refreshError);
          });
      }
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
