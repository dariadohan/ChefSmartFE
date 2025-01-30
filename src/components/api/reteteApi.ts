import { ApiConfig } from './ApiConfig.tsx';

export class ReteteApi {
  apiConfig: ApiConfig;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
  }

  async findAll() {
    return await this.apiConfig.sendRequest('GET', 'reteta');
  }
}
