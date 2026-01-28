import { requestClient } from '#/api/request';

import * as API from './types';

export async function getPermissions(
  params: API.PermissionManagementPermissionsUsingGetParams,
): Promise<API.GetPermissionListResultDto> {
  return requestClient.get(`/api/permission-management/permissions`, {
    params,
  });
}

export async function updatePermissions(
  params: API.PermissionManagementPermissionsUsingPutParams,
  body: API.UpdatePermissionsDto,
) {
  return requestClient.put(`/api/permission-management/permissions`, body, {
    params,
  });
}

export async function getPermissionsByGroup(
  params: API.PermissionManagementPermissionsByGroupUsingGetParams,
): Promise<API.GetPermissionListResultDto> {
  return requestClient.get(`/api/permission-management/permissions/by-group`, {
    params,
  });
}
