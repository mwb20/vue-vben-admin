import { requestClient } from '#/api/request';

import * as API from './types';

export async function getTenants(
  params: API.MultiTenancyTenantsUsingGetParams,
): Promise<API.PagedResultDto1TenantDto> {
  return requestClient.get(`/api/multi-tenancy/tenants`, { params });
}

export async function createTenant(
  body: API.TenantCreateDto,
): Promise<API.TenantDto> {
  return requestClient.post(`/api/multi-tenancy/tenants`, body);
}

export async function getTenant(
  params: API.MultiTenancyTenantsIdUsingGetParams,
): Promise<API.TenantDto> {
  return requestClient.get(`/api/multi-tenancy/tenants/${params.id}`);
}

export async function updateTenant(
  params: API.MultiTenancyTenantsIdUsingPutParams,
  body: API.TenantUpdateDto,
): Promise<API.TenantDto> {
  return requestClient.put(`/api/multi-tenancy/tenants/${params.id}`, body, {
    params,
  });
}

export async function deleteTenant(
  params: API.MultiTenancyTenantsIdUsingDeleteParams,
) {
  return requestClient.delete(`/api/multi-tenancy/tenants/${params.id}`, {
    params,
  });
}

export async function getTenantDefaultConnectionString(
  params: API.MultiTenancyTenantsIdDefaultConnectionStringUsingGetParams,
): Promise<string> {
  return requestClient.get(
    `/api/multi-tenancy/tenants/${params.id}/default-connection-string`,
  );
}

export async function updateTenantDefaultConnectionString(
  params: API.MultiTenancyTenantsIdDefaultConnectionStringUsingPutParams,
) {
  return requestClient.put(
    `/api/multi-tenancy/tenants/${params.id}/default-connection-string`,
    null,
    { params },
  );
}

export async function deleteTenantDefaultConnectionString(
  params: API.MultiTenancyTenantsIdDefaultConnectionStringUsingDeleteParams,
) {
  return requestClient.delete(
    `/api/multi-tenancy/tenants/${params.id}/default-connection-string`,
    { params },
  );
}
