import { log } from '../logger';
import { type InfoResponse } from './types';

export default class NetworkApi {
  readonly host: string = process.env.NETWORK_API!;

  getURL() {
    return `${this.host}`;
  }

  private async getRequestParams({
    endpoint,
    method,
    body,
    mock,
    revalidate,
  }: {
    endpoint: '/info';
    method: 'GET' | 'POST';
    body?: string;
    mock?: object;
    revalidate?: number;
  }) {
    const mockParams = new URLSearchParams();
    if (mock) {
      mockParams.append('mock', 'true');
      Object.entries(mock).forEach(([key, value]) => {
        mockParams.append(key, String(value));
      });
    }

    const path = mockParams.size ? `${endpoint}?${mockParams}` : endpoint;

    const requestParams = {
      serverUrl: this.getURL(),
      endpoint: path,
      method,
      stringifiedBody: body || null,
      next: revalidate ? { revalidate } : undefined,
    };

    return requestParams;
  }

  private async makeRequest(request: Awaited<ReturnType<typeof this.getRequestParams>>) {
    log.debug(`[network api] ${request.endpoint}\nrequest:`, JSON.stringify(request));

    const response = await fetch(`${request.serverUrl}${request.endpoint}`, {
      method: request.method,
      body: request.stringifiedBody,
      next: request.next,
    });

    if (!response.ok) {
      throw new Error(`[network api] Fetch failed. status: ${response.status}`);
    }

    log.debug(`[network api] ${request.endpoint}\nresponse:`, response);
    return response;
  }

  // #region API calls

  async getInfo(revalidate?: number): Promise<InfoResponse | null> {
    log.debug(`[network api] /info: about to try to get info`);

    try {
      const params = await this.getRequestParams({
        endpoint: '/info',
        method: 'GET',
        revalidate,
      });

      const response = await this.makeRequest(params);
      const result = (await response.json()) as InfoResponse;
      log.debug(`[network api] /info: result:`, result);

      if (!result) {
        throw new Error('data fetch failed!');
      }

      return result;
    } catch (err) {
      log.error(`[network api] /info: Error ${err}`);
      return null;
    }
  }

  // #endregion
}

export const NETWORK_API = new NetworkApi();
