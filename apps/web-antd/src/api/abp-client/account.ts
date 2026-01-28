import { requestClient } from '#/api/request';

import * as API from './types';

export async function register(
  body: API.RegisterDto
): Promise<API.IdentityUserDto> {
  return requestClient.post(`/api/account/register`, body);
}

export async function resetPassword(body: API.ResetPasswordDto) {
  return requestClient.post(`/api/account/reset-password`, body);
}

export async function sendPasswordResetCode(
  body: API.SendPasswordResetCodeDto
) {
  return requestClient.post(`/api/account/send-password-reset-code`, body);
}

export async function verifyPasswordResetToken(
  body: API.VerifyPasswordResetTokenInput
): Promise<boolean> {
  return requestClient.post(`/api/account/verify-password-reset-token`, body);
}
