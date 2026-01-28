import { requestClient } from '#/api/request';

import * as API from './types';

export async function getAbpApiDefinitionApiDefinition(
  params: API.AbpApiDefinitionUsingGetParams,
): Promise<API.ApplicationApiDescriptionModel> {
  return requestClient.get(`/api/abp/api-definition`, { params });
}
