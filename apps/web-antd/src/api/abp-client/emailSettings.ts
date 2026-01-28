import { requestClient } from '#/api/request';

import * as API from './types';

export async function getEmailing(): Promise<API.EmailSettingsDto> {
  return requestClient.get(`/api/setting-management/emailing`);
}

export async function createEmailing(body: API.UpdateEmailSettingsDto) {
  return requestClient.post(`/api/setting-management/emailing`, body);
}

export async function sendTestEmail(body: API.SendTestEmailInput) {
  return requestClient.post(
    `/api/setting-management/emailing/send-test-email`,
    body
  );
}
