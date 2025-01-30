import { ApiConfig } from './ApiConfig.tsx';

export class ReteteApi {
  apiConfig: ApiConfig;

  construtor(apiConfig: ApiConfig) {
    this.apiConfig = apiConfig;
  }

  async findAll() {
    return await this.apiConfig.sendRequest('GET', 'reteta');
  }
}
