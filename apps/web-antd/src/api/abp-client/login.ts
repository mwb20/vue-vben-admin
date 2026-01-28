import { requestClient } from '#/api/request';

import * as API from './types';

export async function checkPassword(
  body: API.UserLoginInfo
): Promise<API.AbpLoginResult> {
  return requestClient.post(`/api/account/check-password`, body);
}

export async function login(
  body: API.UserLoginInfo
): Promise<API.AbpLoginResult> {
  return requestClient.post(`/api/account/login`, body);
}

export async function logout() {
  return requestClient.get(`/api/account/logout`);
}
