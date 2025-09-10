import type { GenerateServiceProps } from 'openapi-ts-request';

export default {
  serversPath: './src/api/abp-client', // 接口存放路径
  schemaPath: 'https://localhost:44342/swagger/v1/swagger.json',
  requestLibPath: '#/api/request',
  requestImportStatement: "import { requestClient } from '#/api/request';",
  hook: {
    customTemplates: {
      serviceController: (api: any, ctx: any) => {
        // 获取参数长度
        const parametersLen: number = api.parameters
          ? api.parameters.length
          : 0;

        // 处理路径参数
        let path = api.path;
        if (path.includes('{param')) {
          for (let i = 0; i < parametersLen; i++) {
            path = path.replace(
              `param${i}`,
              `params.${api.parameters[i].name}`,
            );
          }
        }

        // 解析函数名
        let functionName: string;
        if (api.method.toUpperCase() === 'GET') {
          functionName = 'get';
        } else if (api.method.toUpperCase() === 'POST') {
          functionName = 'create';
        } else if (api.method.toUpperCase() === 'PUT') {
          functionName = 'update';
        } else if (api.method.toUpperCase() === 'DELETE') {
          functionName = 'delete';
        } else {
          functionName = 'get';
        }
        let lastPath: string;
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
        }
        // 解析url中by-前面的单词，并将首字母转为大写
        functionName += lastPath.charAt(0).toUpperCase() + lastPath.slice(1);

        if (functionName.includes('-')) {
          // 替换-为驼峰命名
          functionName = functionName.replaceAll(/-([a-z])/g, (g) =>
            g[1].toUpperCase(),
          );
        }

        // 如果functionName以s结尾，不是获取分页数据，也url也不是以s结尾时，去掉s
        if (
          !api.response ||
          !api.response.type ||
          !api.response.type.includes('Paged')
        ) {
          if (functionName.endsWith('s') && !path.endsWith('s')) {
            functionName = functionName.slice(0, -1);
          } else if (functionName.endsWith('es') && !path.endsWith('es')) {
            functionName = functionName.slice(0, -2);
          }
        }

        // console.log(api);
        // 标记是否存在body参数
        let needRequestParams = false;
        let params = '';
        if ((api.params && api.hasParams) || parametersLen > 0) {
          params = `params: ${ctx.namespace}.${api.typeName}`;
        } else if (api.body && api.body.type) {
          params = `params: ${api.body.type}`;
          needRequestParams = true;
        }
        // 如果存在请求参数，并且路径中不存在$，则需要添加params参数
        if (!needRequestParams && parametersLen > 0 && !path.includes('$')) {
          needRequestParams = true;
        }

        let responseType = '';
        if (
          api.response &&
          api.response.type &&
          api.response.type !== 'unknown'
        ) {
          responseType = `: Promise<${api.response.type}>`;
        }

        if (api.method.toUpperCase() === 'GET') {
          return `
export async function ${functionName}(${params})${responseType} {
  return requestClient.get(\`${path}\`${parametersLen > 1 || (parametersLen === 1 && !path.includes('$')) ? `, { params }` : ''})
}`;
        }
        if (api.method.toUpperCase() === 'POST') {
          return `
export async function ${functionName}(${params})${responseType} {
  return requestClient.post(\`${path}\`, params)
}`;
        }
        if (api.method.toUpperCase() === 'PUT') {
          return `
export async function ${functionName}(${params})${responseType} {
  return requestClient.put(\`${path}\`${needRequestParams ? `, { params }` : ''})
}`;
        }
        if (api.method.toUpperCase() === 'DELETE') {
          return `
export async function ${functionName}(${params})${responseType} {
  return requestClient.delete(\`${path}\`${needRequestParams ? `, { params }` : ''})
}`;
        }
        return '';
      },
    },
  },
} as GenerateServiceProps;
