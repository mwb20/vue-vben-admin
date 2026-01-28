import { requestClient } from '#/api/request';

import * as API from './types';

export async function getTimezone(): Promise<string> {
  return requestClient.get(`/api/setting-management/timezone`);
}

export async function createTimezone(
  params: API.SettingManagementTimezoneUsingPostParams
) {
  return requestClient.post(`/api/setting-management/timezone`, null, {
    params,
  });
}

export async function getTimezones(): Promise<API.NameValue[]> {
  return requestClient.get(`/api/setting-management/timezone/timezones`);
}
