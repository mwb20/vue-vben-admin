import { requestClient } from '#/api/request';

import * as API from './types';

export async function getUsers(
  params: API.IdentityUsersUsingGetParams,
): Promise<API.PagedResultDto1IdentityUserDto> {
  return requestClient.get(`/api/identity/users`, { params });
}

export async function createUser(
  body: API.IdentityUserCreateDto,
): Promise<API.IdentityUserDto> {
  return requestClient.post(`/api/identity/users`, body);
}

export async function getUser(
  params: API.IdentityUsersIdUsingGetParams,
): Promise<API.IdentityUserDto> {
  return requestClient.get(`/api/identity/users/${params.id}`);
}

export async function updateUser(
  params: API.IdentityUsersIdUsingPutParams,
  body: API.IdentityUserUpdateDto,
): Promise<API.IdentityUserDto> {
  return requestClient.put(`/api/identity/users/${params.id}`, body, {
    params,
  });
}

export async function deleteUser(params: API.IdentityUsersIdUsingDeleteParams) {
  return requestClient.delete(`/api/identity/users/${params.id}`, { params });
}

export async function getUserRoles(
  params: API.IdentityUsersIdRolesUsingGetParams,
): Promise<API.ListResultDto1IdentityRoleDto> {
  return requestClient.get(`/api/identity/users/${params.id}/roles`);
}

export async function updateUserRoles(
  params: API.IdentityUsersIdRolesUsingPutParams,
  body: API.IdentityUserUpdateRolesDto,
) {
  return requestClient.put(`/api/identity/users/${params.id}/roles`, body, {
    params,
  });
}

export async function getUserAssignableRoles(): Promise<API.ListResultDto1IdentityRoleDto> {
  return requestClient.get(`/api/identity/users/assignable-roles`);
}

export async function getUsersByEmail(
  params: API.IdentityUsersByEmailEmailUsingGetParams,
): Promise<API.IdentityUserDto> {
  return requestClient.get(`/api/identity/users/by-email/${params.email}`);
}

export async function getUsersByUsername(
  params: API.IdentityUsersByUsernameUserNameUsingGetParams,
): Promise<API.IdentityUserDto> {
  return requestClient.get(
    `/api/identity/users/by-username/${params.userName}`,
  );
}
