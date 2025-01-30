//@ts-ignore
import axios, { Method, RawAxiosRequestConfig } from 'axios';

export class ApiConfig {
  api: string;

  constructor(yumMealApi: string) {
    this.api = yumMealApi;
  }

  get(): any {
    // grab the config for the app
  }

  async sendRequest(
    method: Method,
    endpoint: string,
    data?: object,
    withCredentials = false,
    token = '',
  ) {
    const url = `${this.api}/${endpoint}`;

    const config: RawAxiosRequestConfig = {
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: withCredentials,
    };

    const response = await axios(config);
    return response.data;
  }
}
