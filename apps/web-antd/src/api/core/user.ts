import type { UserInfo } from '@vben/types';

import { applicationConfiguration } from '#/api/abp/index';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  const config = await applicationConfiguration();
  return {
    realName: config.currentUser.name,
    roles: Object.entries(config.auth.grantedPolicies)
      .filter(([, value]) => value === true) // 过滤出值为 true 的属性
      .map(([key]) => key),
  } as UserInfo;
}
