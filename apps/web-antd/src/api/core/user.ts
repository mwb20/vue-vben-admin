import type { UserInfo } from '@vben/types';

import { getApplicationConfiguration } from '#/api/abp-client/abpApplicationConfiguration';

/**
 * 获取用户信息（此方法已没有实际使用，获取用户信息已集成到store/auth.ts）
 */
export async function getUserInfoApi(): Promise<UserInfo> {
  const config = await getApplicationConfiguration({
    IncludeLocalizationResources: false,
  });
  return {
    realName: config.currentUser?.name || '',
    username: config.currentUser?.userName || '',
    roles: Object.entries(config.auth?.grantedPolicies || {})
      .filter(([, value]) => value === true) // 过滤出值为 true 的属性
      .map(([key]) => key),
  } as UserInfo;
}
