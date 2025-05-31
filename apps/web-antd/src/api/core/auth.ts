import { formRequestClient } from '#/api/request-form';

export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    password?: string;
    username?: string;
    grant_type?: string;
    scope?: string;
    client_id?: string;
  }

  /** 登录接口返回值 */
  export interface LoginResult {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  }

  export interface RefreshTokenResult {
    data: string;
    status: number;
  }
}

/**
 * 登录
 */
export async function loginApi(data: AuthApi.LoginParams) {
  // Ensure data is a plain object if it's a Proxy
  const plainData = { ...data };

  // Add necessary fields
  plainData.grant_type = import.meta.env.VITE_LOGIN_GRANT_TYPE;
  plainData.scope = import.meta.env.VITE_LOGIN_SCOPE;
  plainData.client_id = import.meta.env.VITE_LOGIN_CLIENT_ID;

  return formRequestClient.post<AuthApi.LoginResult>(
    '/connect/token',
    plainData,
  );
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi(refreshToken: null | string) {
  return formRequestClient.post<AuthApi.LoginResult>('/connect/token', {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: import.meta.env.VITE_LOGIN_CLIENT_ID,
  });
}

/**
 * 退出登录
 */
export async function logoutApi(
  accessToken: null | string,
  refreshToken: null | string,
) {
  await formRequestClient.post('connect/revocat', {
    client_id: import.meta.env.VITE_LOGIN_CLIENT_ID,
    token: accessToken,
    token_type_hint: 'access_token',
  });
  // 存在刷新token时也需要撤销刷新token
  if (refreshToken) {
    await formRequestClient.post('connect/revocat', {
      client_id: import.meta.env.VITE_LOGIN_CLIENT_ID,
      token: refreshToken,
      token_type_hint: 'refresh_token',
    });
  }
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
  // return formRequestClient.get<string[]>('/auth/codes');
  // 不需要权限码的功能，直接返回空数组
  return [];
}
