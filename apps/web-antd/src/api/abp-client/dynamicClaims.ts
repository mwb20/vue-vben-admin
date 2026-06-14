import { requestClient } from '#/api/request';

export async function refresh() {
  return requestClient.post(`/api/account/dynamic-claims/refresh`);
}
