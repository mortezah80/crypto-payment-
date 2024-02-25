// library
import { useZustandStore } from "@/store";
import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CancelTokenSource,
} from "axios";
import { getCookie } from "cookies-next";

export abstract class BaseService {
  constructor(alternativeBaseUrl?: string) {
    this.axiosRequestConfig = {
      baseURL: alternativeBaseUrl
        ? alternativeBaseUrl
        : (process.env.NEXT_PUBLIC_BACKEND_URL as string),
    };
    this.axiosInstance = Axios.create(this.axiosRequestConfig);
  }

  baseUrl: string = "";

  private static token: string | null = null;
  protected axiosInstance: AxiosInstance;
  protected axiosRequestConfigDefault: AxiosRequestConfig = {
    baseURL: this.baseUrl,
    headers: { "Content-Type": "application/json" },
  };

  private _axiosRequestConfig: AxiosRequestConfig =
    this.axiosRequestConfigDefault;

  get axiosRequestConfig() {
    return this._axiosRequestConfig;
  }

  set axiosRequestConfig(config: AxiosRequestConfig) {
    if (config.headers) {
      config.headers = {
        ...this._axiosRequestConfig.headers,
        ...config.headers,
      };
    }
    this._axiosRequestConfig = { ...this._axiosRequestConfig, ...config };
  }

  get axiosInstanceWithoutToken(): AxiosInstance {
    let axiosInstanceWithoutToken: AxiosInstance = this.axiosInstance;

    axiosInstanceWithoutToken.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );

    return axiosInstanceWithoutToken;
  }

  get axiosInstanceWithToken(): AxiosInstance {
    let token = BaseService.token;

    let axiosInstanceWithToken: AxiosInstance;

    if (BaseService.token === null) {
      token =
        useZustandStore.getState().user.access_token ||
        getCookie("token") ||
        null;
      if (token) BaseService.setToken(token);
    }

    if (token) {
      this.axiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      axiosInstanceWithToken = Axios.create({
        ...this.axiosRequestConfig,
      });
    } else {
      axiosInstanceWithToken = this.axiosInstance;
    }

    axiosInstanceWithToken.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = "/auth/login";
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );

    return axiosInstanceWithToken;
  }

  get axiosInstanceWithLogToken(): AxiosInstance {
    let token = "5d9be9f1c11ee37e7794497e31762a807b8397d1";

    let axiosInstanceWithLogToken: AxiosInstance;

    if (token) {
      this.axiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
          Token: token,
        },
      };
      axiosInstanceWithLogToken = Axios.create({
        ...this.axiosRequestConfig,
      });
    } else {
      axiosInstanceWithLogToken = this.axiosInstance;
    }

    axiosInstanceWithLogToken.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        // if (error.response.status === 401 || error.response.status === 403) {
        //   localStorage.clear();
        //   sessionStorage.clear();
        //   window.location.href = "/auth/login";
        // }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );

    return axiosInstanceWithLogToken;
  }

  private static setToken(token: string) {
    BaseService.token = token;
  }

  static removeToken() {
    BaseService.token = null;
  }

  static msgRequestCanceled = "request-canceled";
  static cancelTokenSource(): CancelTokenSource {
    return Axios.CancelToken.source();
  }
}
