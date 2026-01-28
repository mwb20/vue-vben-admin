import { requestClient } from '#/api/request';

import * as API from './types';

export async function userLookupById(
  params: API.IdentityUsersLookupIdUsingGetParams
): Promise<API.UserData> {
  return requestClient.get(`/api/identity/users/lookup/${params.id}`);
}

export async function userLookupByUsername(
  params: API.IdentityUsersLookupByUsernameUserNameUsingGetParams
): Promise<API.UserData> {
  return requestClient.get(
    `/api/identity/users/lookup/by-username/${params.userName}`
  );
}

export async function userLookupCount(
  params: API.IdentityUsersLookupCountUsingGetParams
): Promise<number> {
  return requestClient.get(`/api/identity/users/lookup/count`, { params });
}

export async function userLookup(
  params: API.IdentityUsersLookupSearchUsingGetParams
): Promise<API.ListResultDto1UserData> {
  return requestClient.get(`/api/identity/users/lookup/search`, { params });
}
