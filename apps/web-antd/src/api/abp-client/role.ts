import { requestClient } from '#/api/request';

import * as API from './types';

export async function getRoles(
  params: API.IdentityRolesUsingGetParams,
): Promise<API.PagedResultDto1IdentityRoleDto> {
  return requestClient.get(`/api/identity/roles`, { params });
}

export async function createRole(
  body: API.IdentityRoleCreateDto,
): Promise<API.IdentityRoleDto> {
  return requestClient.post(`/api/identity/roles`, body);
}

export async function getRole(
  params: API.IdentityRolesIdUsingGetParams,
): Promise<API.IdentityRoleDto> {
  return requestClient.get(`/api/identity/roles/${params.id}`);
}

export async function updateRole(
  params: API.IdentityRolesIdUsingPutParams,
  body: API.IdentityRoleUpdateDto,
): Promise<API.IdentityRoleDto> {
  return requestClient.put(`/api/identity/roles/${params.id}`, body, {
    params,
  });
}

export async function deleteRole(params: API.IdentityRolesIdUsingDeleteParams) {
  return requestClient.delete(`/api/identity/roles/${params.id}`);
}

export async function getRoleAll(): Promise<API.ListResultDto1IdentityRoleDto> {
  return requestClient.get(`/api/identity/roles/all`);
}
