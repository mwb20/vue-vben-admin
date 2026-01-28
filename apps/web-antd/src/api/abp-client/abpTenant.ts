import { requestClient } from '#/api/request';

import * as API from './types';

export async function getTenantsById(
  params: API.AbpMultiTenancyTenantsByIdIdUsingGetParams
): Promise<API.FindTenantResultDto> {
  return requestClient.get(`/api/abp/multi-tenancy/tenants/by-id/${params.id}`);
}

export async function getTenantsByName(
  params: API.AbpMultiTenancyTenantsByNameNameUsingGetParams
): Promise<API.FindTenantResultDto> {
  return requestClient.get(
    `/api/abp/multi-tenancy/tenants/by-name/${params.name}`
  );
}
