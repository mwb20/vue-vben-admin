import { requestClient } from '#/api/request';

import * as API from './types';

export async function refresh() {
  return requestClient.post(`/api/account/dynamic-claims/refresh`);
}
