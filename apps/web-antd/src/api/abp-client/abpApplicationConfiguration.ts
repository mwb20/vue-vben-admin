import { requestClient } from '#/api/request';

import * as API from './types';

export async function getApplicationConfiguration(
  params: API.AbpApplicationConfigurationUsingGetParams,
): Promise<API.ApplicationConfigurationDto> {
  return requestClient.get(`/api/abp/application-configuration`, { params });
}
