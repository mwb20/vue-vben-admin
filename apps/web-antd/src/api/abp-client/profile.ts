import { requestClient } from '#/api/request';

import * as API from './types';

export async function getMyProfile(): Promise<API.ProfileDto> {
  return requestClient.get(`/api/account/my-profile`);
}

export async function updateMyProfile(
  body: API.UpdateProfileDto,
): Promise<API.ProfileDto> {
  return requestClient.put(`/api/account/my-profile`, body);
}

export async function changePassword(body: API.ChangePasswordInput) {
  return requestClient.post(`/api/account/my-profile/change-password`, body);
}
