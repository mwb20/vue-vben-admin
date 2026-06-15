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

export async function getPermissionsResource(
  params: API.PermissionManagementPermissionsResourceUsingGetParams,
): Promise<API.GetResourcePermissionListResultDto> {
  return requestClient.get(`/api/permission-management/permissions/resource`, {
    params,
  });
}

export async function updatePermissionsResource(
  params: API.PermissionManagementPermissionsResourceUsingPutParams,
  body: API.UpdateResourcePermissionsDto,
) {
  return requestClient.put(
    `/api/permission-management/permissions/resource`,
    body,
    { params },
  );
}

export async function deletePermissionsResource(
  params: API.PermissionManagementPermissionsResourceUsingDeleteParams,
) {
  return requestClient.delete(
    `/api/permission-management/permissions/resource`,
    { params },
  );
}

export async function getPermissionsResourceDefinitions(
  params: API.PermissionManagementPermissionsResourceDefinitionsUsingGetParams,
): Promise<API.GetResourcePermissionDefinitionListResultDto> {
  return requestClient.get(
    `/api/permission-management/permissions/resource-definitions`,
    {
      params,
    },
  );
}

export async function getPermissionsResourceProviderKeyLookupServices(
  params: API.PermissionManagementPermissionsResourceProviderKeyLookupServicesUsingGetParams,
): Promise<API.GetResourceProviderListResultDto> {
  return requestClient.get(
    `/api/permission-management/permissions/resource-provider-key-lookup-services`,
    { params },
  );
}

export async function getResourceByProvider(
  params: API.PermissionManagementPermissionsResourceByProviderUsingGetParams,
): Promise<API.GetResourcePermissionWithProviderListResultDto> {
  return requestClient.get(
    `/api/permission-management/permissions/resource/by-provider`,
    {
      params,
    },
  );
}

export async function getPermissionsSearchResourceProviderKeys(
  params: API.PermissionManagementPermissionsSearchResourceProviderKeysUsingGetParams,
): Promise<API.SearchProviderKeyListResultDto> {
  return requestClient.get(
    `/api/permission-management/permissions/search-resource-provider-keys`,
    {
      params,
    },
  );
}
