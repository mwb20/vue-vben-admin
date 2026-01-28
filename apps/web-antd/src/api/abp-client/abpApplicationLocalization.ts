import { requestClient } from '#/api/request';

import * as API from './types';

export async function getApplicationLocalization(
  params: API.AbpApplicationLocalizationUsingGetParams
): Promise<API.ApplicationLocalizationDto> {
  return requestClient.get(`/api/abp/application-localization`, { params });
}
