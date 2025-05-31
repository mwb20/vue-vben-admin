import type { Recordable, UserInfo } from '@vben/types';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { LOGIN_PATH } from '@vben/constants';
import { preferences } from '@vben/preferences';
import { resetAllStores, useAccessStore, useUserStore } from '@vben/stores';

import { notification } from 'ant-design-vue';
import { defineStore } from 'pinia';

import {
  getAccessCodesApi,
  getUserInfoApi,
  loginApi,
  logoutApi,
  refreshTokenApi,
} from '#/api';
import { $t } from '#/locales';

export const useAuthStore = defineStore('auth', () => {
  const accessStore = useAccessStore();
  const userStore = useUserStore();
  const router = useRouter();

  const loginLoading = ref(false);

  /**
   * 异步处理登录操作
   * Asynchronously handle the login process
   * @param params 登录表单数据
   */
  async function authLogin(
    params: Recordable<any>,
    onSuccess?: () => Promise<void> | void,
  ) {
    // 异步处理用户登录操作并获取 accessToken
    let userInfo: null | UserInfo = null;
    try {
      loginLoading.value = true;
      const { access_token, refresh_token } = await loginApi(params);

      // 如果成功获取到 accessToken
      if (access_token) {
        accessStore.setAccessToken(access_token);
        // by mwb 2024年10月27日 如果存在刷新token，则将刷新token保存起来
        if (refresh_token) {
          accessStore.setRefreshToken(refresh_token);
        }

        // 获取用户信息并存储到 accessStore 中
        const [fetchUserInfoResult, accessCodes] = await Promise.all([
          fetchUserInfo(),
          getAccessCodesApi(),
        ]);

        userInfo = fetchUserInfoResult;

        userStore.setUserInfo(userInfo);
        accessStore.setAccessCodes(accessCodes);

        if (accessStore.loginExpired) {
          accessStore.setLoginExpired(false);
        } else {
          onSuccess
            ? await onSuccess?.()
            : await router.push(
                userInfo?.homePath || preferences.app.defaultHomePath,
              );
        }

        if (userInfo?.realName) {
          notification.success({
            description: `${$t('authentication.loginSuccessDesc')}:${userInfo?.realName}`,
            duration: 3,
            message: $t('authentication.loginSuccess'),
          });
        }
      }
    } finally {
      loginLoading.value = false;
    }

    return {
      userInfo,
    };
  }

  async function logout(redirect: boolean = true) {
    try {
      await logoutApi(accessStore.accessToken, accessStore.refreshToken);
    } catch {
      // 不做任何处理
    }
    resetAllStores();
    accessStore.setLoginExpired(false);

    // 回登录页带上当前路由地址
    await router.replace({
      path: LOGIN_PATH,
      query: redirect
        ? {
            redirect: encodeURIComponent(router.currentRoute.value.fullPath),
          }
        : {},
    });
  }

  async function fetchUserInfo() {
    let userInfo: null | UserInfo = null;
    userInfo = await getUserInfoApi();
    /* 获取到的用户昵称为空时刷新token，如果刷新失败跳转到登录页面 by mwb 2024年10月27日 */
    if (!userInfo.realName) {
      try {
        const resp = await refreshTokenApi(accessStore.refreshToken);
        const { access_token, refresh_token } = resp;
        if (access_token) {
          accessStore.setAccessToken(access_token);
          // 如果存在刷新token，则将刷新token保存起来
          if (refresh_token) {
            accessStore.setRefreshToken(refresh_token);
          }
          // 刷新token后重新获取用户信息
          userInfo = await getUserInfoApi();
        }
      } catch {}

      // 如果用户昵称仍然为空则跳转到登录页面
      if (!userInfo.realName) {
        // 清除所有登录信息，并返回一个空对象使其自动跳转到登录页面
        // 路由处理逻辑中会自动跳转，在此不需要手工跳转
        resetAllStores();
        accessStore.setLoginExpired(false);
        return null;
      }
    }
    /* 获取到的用户昵称为空时刷新token，如果刷新失败跳转到登录页面 by mwb 2024年10月27日 */
    userStore.setUserInfo(userInfo);
    return userInfo;
  }

  function $reset() {
    loginLoading.value = false;
  }

  return {
    $reset,
    authLogin,
    fetchUserInfo,
    loginLoading,
    logout,
  };
});
