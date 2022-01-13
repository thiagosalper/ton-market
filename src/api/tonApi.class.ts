import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const TAG_RESPONSE = 'RESPONSE_';
const TAG_ERROR = 'ERROR_';

interface TonMarketApiInterface {
  execute<T>(endpoint: string, method: Method, body?: unknown, headers?: Headers): Promise<T>;
  getInstance(): AxiosInstance;
}

class TonApi implements TonMarketApiInterface {
  private readonly api: AxiosInstance;
  private responseInterceptor: unknown;
  private requestInterceptor: unknown;

  constructor(config: AxiosRequestConfig) {
    this.api = axios.create(config);

    this.responseInterceptor = this.api.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error),
    );

    this.requestInterceptor = this.api.interceptors.request;
  }

  execute<T>(endpoint: string, method: Method, body?: unknown, headers?: Headers): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      return this.api.request<T>({ method, url: endpoint, headers })
        .then((response: AxiosResponse<T>) => {
          console.log(TAG_RESPONSE, response);
          resolve(response.data);
        })
        .catch((apiError) => {
          console.log(TAG_ERROR, apiError);
          reject({
            statusCode: apiError.response?.status,
            message: apiError.message,
          });
        });
    });
  }

  getInstance() {
    return this.api;
  }

}

export default TonApi;
