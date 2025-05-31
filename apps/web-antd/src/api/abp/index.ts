import type {
  ApplicationConfiguration,
  QueryPageInput,
  UserListResult,
} from './types';

import { requestClient } from '#/api/request';

/**
 * 获取程序配置信息
 */
export async function applicationConfiguration() {
  return requestClient.get<ApplicationConfiguration>(
    '/api/abp/application-configuration',
  );
}

/**
 * 获取用户列表
 */
export async function getUsers(params: QueryPageInput) {
  return requestClient.get<UserListResult>('/api/identity/users', { params });
}
