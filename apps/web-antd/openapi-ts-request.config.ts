import type { GenerateServiceProps } from 'openapi-ts-request';

const specialTags = new Set([
  'AbpApplicationConfiguration',
  'AbpApplicationLocalization',
  'EmailSettings',
  'TimeZoneSettings',
]);

// 特殊Url字典，特殊Url的函数名直接返回字典中的函数名
const specialUrlMap = new Map<string, string>();
specialUrlMap.set('/api/account/dynamic-claims/refresh', 'refresh');
specialUrlMap.set('/api/account/register', 'register');
specialUrlMap.set('/api/account/reset-password', 'resetPassword');
specialUrlMap.set(
  '/api/account/send-password-reset-code',
  'sendPasswordResetCode',
);
specialUrlMap.set(
  '/api/account/verify-password-reset-token',
  'verifyPasswordResetToken',
);
specialUrlMap.set(
  '/api/setting-management/emailing/send-test-email',
  'sendTestEmail',
);
specialUrlMap.set('/api/account/check-password', 'checkPassword');
specialUrlMap.set('/api/account/login', 'login');
specialUrlMap.set('/api/account/logout', 'logout');
specialUrlMap.set('/api/account/my-profile/change-password', 'changePassword');
// eslint-disable-next-line no-template-curly-in-string
specialUrlMap.set('/api/identity/users/lookup/${param0}', 'userLookupById');
specialUrlMap.set(
  // eslint-disable-next-line no-template-curly-in-string
  '/api/identity/users/lookup/by-username/${param0}',
  'userLookupByUsername',
);
specialUrlMap.set('/api/identity/users/lookup/count', 'userLookupCount');
specialUrlMap.set('/api/identity/users/lookup/search', 'userLookup');

// 获取特殊url的函数名
function getSpecialUrlFunctionName(api: any) {
  return specialUrlMap.get(api.path);
}

/**
 * 获取函数名
 * @param api 对象
 * @returns 函数名
 */
function getFunctionName(api: any, path: string) {
  // 先获取特殊url的函数名
  const specialFunctionName = getSpecialUrlFunctionName(api);
  if (specialFunctionName) {
    return specialFunctionName;
  }

  // 解析函数名
  let functionName: string;
  const methodName = api.method.toUpperCase();
  switch (methodName) {
    case 'DELETE': {
      functionName = 'delete';

      break;
    }
    case 'GET': {
      functionName = 'get';

      break;
    }
    case 'POST': {
      functionName = 'create';

      break;
    }
    case 'PUT': {
      functionName = 'update';

      break;
    }
    default: {
      functionName = 'get';
    }
  }
  let lastPath: string;
  // 对url中包含by-的方法名进行特殊处理
  if (path.includes('by-')) {
    // 存在by-时，先根据/by-分割路径，再根据/分割路径，取最后一个路径
    const byPathSplit = path.split('/by-');
    const pathSplit = byPathSplit[0].split('/');
    // 再根据/分割路径，取最后一个路径
    lastPath = pathSplit[pathSplit.length - 1];
    // 解析url中by-后面的单词，并将首字母转为大写
    const byLatter = byPathSplit[1].split('/')[0];
    lastPath += `By${byLatter.charAt(0).toUpperCase()}${byLatter.slice(1)}`;
  } else {
    // 不存在by-时，根据/分割路径，取最后一个路径
    const pathSplit = path.split('/');
    lastPath = pathSplit[pathSplit.length - 1];
    if (lastPath.includes('$')) {
      lastPath = pathSplit[pathSplit.length - 2];
    }
    const tag = api.tags[0];
    if (
      !specialTags.has(tag) &&
      !lastPath.toUpperCase().includes(tag.toUpperCase())
    ) {
      functionName += tag.charAt(0).toUpperCase() + tag.slice(1);
    }
  }
  // 解析url中by-前面的单词，并将首字母转为大写
  functionName += lastPath.charAt(0).toUpperCase() + lastPath.slice(1);

  if (functionName.includes('-')) {
    // 替换-为驼峰命名
    functionName = functionName.replaceAll(/-([a-z])/g, (g) =>
      g[1].toUpperCase(),
    );
  }

  // 如果functionName以s结尾，不是获取分页数据，也url也不是以s结尾或者是POST请求时，去掉s
  if (
    !api.response ||
    !api.response.type ||
    !api.response.type.includes('Paged')
  ) {
    if (
      functionName.endsWith('s') &&
      (!path.endsWith('s') ||
        methodName === 'POST') /** POST请求方法也需要把最后的s去掉 */
    ) {
      functionName = functionName.slice(0, -1);
    } else if (functionName.endsWith('es') && !path.endsWith('es')) {
      functionName = functionName.slice(0, -2);
    }
  }
  return functionName;
}

/**
 * 获取url
 * @param api 对象
 * @returns url
 */
function getUrl(api: any) {
  // 获取参数长度
  const parametersLen: number = api.parameters ? api.parameters.length : 0;
  // 处理路径参数
  let path = api.path;
  if (path.includes('{param')) {
    for (let i = 0; i < parametersLen; i++) {
      path = path.replace(`param${i}`, `params.${api.parameters[i].name}`);
    }
  }
  return path;
}

/**
 * 获取Url参数
 * @param api 对象
 * @returns 参数
 */
function getParams(api: any, ctx: any): null | string {
  // 获取参数长度
  let params: string = '';
  if (api.parameters && api.parameters.length > 0) {
    params = `params: ${ctx.namespace}.${api.typeName},`;
  }
  return params;
}

/**
 * 获取Body参数
 * @param api 对象
 * @returns 参数
 */
function getBodyParams(api: any) {
  let bodyParams: string = '';
  if (api.body && api.body.type) {
    bodyParams = `body: ${api.body.type},`;
  }
  return bodyParams;
}
/**
 * 获取返回值类型
 * @param api 对象
 * @returns 返回值类型
 */
function getResponseType(api: any) {
  let responseType: string = '';
  if (api.response && api.response.type && api.response.type !== 'unknown') {
    responseType = `: Promise<${api.response.type}>`;
  }
  return responseType;
}

export default {
  serversPath: './src/api/abp-client', // 接口存放路径
  schemaPath: 'https://localhost:44318/swagger/v1/swagger.json',
  requestLibPath: '#/api/request',
  requestImportStatement: "import { requestClient } from '#/api/request';",
  hook: {
    customTemplates: {
      serviceController: (api: any, ctx: any) => {
        const path = getUrl(api);

        // 获取函数名
        const functionName = getFunctionName(api, path);

        const parametersLen = api.parameters ? api.parameters.length : 0;
        const params = getParams(api, ctx);
        const bodyParams = getBodyParams(api);
        const responseType = getResponseType(api);

        if (api.method.toUpperCase() === 'GET') {
          return `
export async function ${functionName}(${params})${responseType} {
  return requestClient.get(\`${path}\`${parametersLen > 1 || (parametersLen === 1 && !path.includes('$')) ? `, { params, }` : ''})
}`;
        }
        if (api.method.toUpperCase() === 'POST') {
          return `
export async function ${functionName}(${params}${bodyParams})${responseType} {
  return requestClient.post(\`${path}\`${bodyParams ? `, body` : `${params ? ', null' : ''}`}${params ? ', { params, }' : ''})
}`;
        }
        if (api.method.toUpperCase() === 'PUT') {
          return `
export async function ${functionName}(${params}${bodyParams})${responseType} {
  return requestClient.put(\`${path}\`${bodyParams ? `, body` : `${params ? ', null' : ''}`}${params ? ', { params, }' : ''})
}`; // 有get参数时要添加到params
        }
        if (api.method.toUpperCase() === 'DELETE') {
          return `
export async function ${functionName}(${params}${bodyParams})${responseType} {
  return requestClient.delete(\`${path}\`${bodyParams ? `, body` : ''}${params ? ', { params, }' : ''})
}`;
        }
        return '';
      },
    },
  },
} as GenerateServiceProps;
