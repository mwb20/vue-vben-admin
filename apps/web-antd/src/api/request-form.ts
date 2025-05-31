/**
 * 自定义的表单请求对象
 */

import { useAppConfig } from '@vben/hooks';
import { errorMessageResponseInterceptor, RequestClient } from '@vben/request';

import { message } from 'ant-design-vue';

const { apiURL } = useAppConfig(import.meta.env, import.meta.env.PROD);

function createRequestClient(baseURL: string) {
  const client = new RequestClient({
    baseURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', // 设置Content-Type为表单请求
    },
    // 对请求数据进行处理，将对象转换成表单字符串
    transformRequest(reqData: Record<string, any>) {
      if (!reqData) {
        return null;
      }
      return Object.entries(reqData)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        )
        .join('&');
    },
  });

  // response数据解构
  client.addResponseInterceptor<any>({
    fulfilled: (response) => {
      const { data: responseData, status } = response;

      if (status >= 200 && status < 400) {
        return responseData;
      }
      throw new Error(`Error ${status}`);
    },
  });

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(
    errorMessageResponseInterceptor((msg: string, error) => {
      // 这里可以根据业务进行定制,你可以拿到 error 内的信息进行定制化处理，根据不同的 code 做不同的提示，而不是直接使用 message.error 提示 msg
      // 当前mock接口返回的错误字段是 error 或者 message
      const responseData = error?.response?.data ?? {};
      const errorMessage =
        responseData?.error_description ?? responseData?.error ?? '';
      // 如果没有错误信息，则会根据状态码进行提示
      message.error(errorMessage || msg);
    }),
  );

  return client;
}

export const formRequestClient = createRequestClient(apiURL);
