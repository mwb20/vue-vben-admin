import type { VxeTableGridOptions } from '@vben/plugins/vxe-table';
import type { DeepPartial } from '@vben/types';

import type { VbenFormProps } from '#/adapter/form';
import { $t } from '@vben/locales';

import { z } from '#/adapter/form';
import { requestClient } from '#/api/request';

interface RowType {
  id?: string;
  name?: string;
  concurrencyStamp?: string;
}

export const SearchFormOptions: VbenFormProps = {
  collapsed: false,
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: $t('abp.inputTenantName'),
      },
      defaultValue: '',
      fieldName: 'filter',
      label: $t('abp.search'),
    },
  ],
  showCollapseButton: false,
  submitButtonOptions: {
    content: $t('abp.query'),
  },
  submitOnChange: false,
  submitOnEnter: true,
  compact: false,
  wrapperClass: 'grid-cols-2 md:grid-cols-2',
};

export const MainGridOptions: DeepPartial<VxeTableGridOptions<RowType>> = {
  checkboxConfig: {
    highlight: true,
  },
  border: true,
  columns: [
    {
      field: 'name',
      title: $t('abp.tenantName'),
      minWidth: 160,
      align: 'center',
    },
    {
      field: 'creationTime',
      title: $t('abp.createTime'),
      formatter: 'formatDateTime',
      sortable: true,
      minWidth: 150,
    },
    {
      cellRender: { name: 'CellLink', props: { text: '编辑' } },
      field: 'action',
      fixed: 'right',
      title: $t('abp.action'),
      width: 150,
      slots: { default: 'action' },
    },
  ],
  printConfig: {
    columns: [
      { field: 'name' },
      { field: 'creationTime' },
    ],
  },
  height: 'auto',
  keepSource: true,
  sortConfig: {
    trigger: 'cell',
    remote: true,
  },
  toolbarConfig: {
    refresh: true,
    print: true,
    zoom: true,
    custom: true,
  },
  pagerConfig: {},
  proxyConfig: {
    sort: true,
    response: {
      result: 'items',
      total: 'totalCount',
    },
    ajax: {
      query: async (params: any, formValues: any[]) => {
        const { sort, page } = params;
        return requestClient.get('/api/multi-tenancy/tenants', {
          params: {
            filter: formValues.filter,
            sorting: sort.order ? `${sort.field} ${sort.order}` : undefined,
            skipCount: (page.currentPage - 1) * page.pageSize,
            maxResultCount: page.pageSize,
          },
        });
      },
      delete: async () => {
        return new Promise((resolve) => {
          resolve([]);
        });
      },
    },
  },
};

export const EditFormOptions: VbenFormProps = {
  commonConfig: {
    labelWidth: 100,
  },
  showDefaultActions: false,
  layout: 'horizontal',
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: $t('abp.inputTenantName'),
      },
      fieldName: 'name',
      label: $t('abp.tenantName'),
      rules: z.string().min(1, $t('abp.inputTenantName')),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: $t('abp.inputAdminEmailAddress'),
      },
      fieldName: 'adminEmailAddress',
      label: $t('abp.adminEmailAddress'),
      rules: z.string().email($t('abp.inputAdminEmailAddress')),
      dependencies: {
        triggerFields: ['id'],
        required() {
          return true;
        },
        if(values){
            return !values.id;
        }
      }
    },
    {
      component: 'InputPassword',
      componentProps: {
        placeholder: $t('abp.inputAdminPassword'),
      },
      fieldName: 'adminPassword',
      label: $t('abp.adminPassword'),
      dependencies: {
        triggerFields: ['id'],
        required() {
          return true;
        },
        if(values){
            // 编辑时不显示
            return !values.id;
        }
      },
    },
    {
      component: 'InputPassword',
      componentProps: {
        placeholder: $t('abp.inputConfirmPassword'),
      },
      fieldName: 'confirmPassword',
      label: $t('abp.confirmPassword'),
      dependencies: {
        triggerFields: ['adminPassword'],
        if(values) {
          const noPassword = !values.adminPassword;
          if (noPassword) {
            // 没有密码时清空确认密码
            values.confirmPassword = null;
          }
          return !noPassword;
        },
        rules(value) {
          return z
            .string(value)
            .min(1, { message: $t('abp.inputConfirmPassword') })
            .refine(
              (zvalue) => {
                return zvalue === value.adminPassword;
              },
              {
                message: $t('abp.confirmPasswordNotMatch'),
              },
            );
        },
      },
    },
    {
      component: 'Input',
      fieldName: 'id',
      dependencies: {
        triggerFields: ['id'],
        if() {
          return false;
        },
      },
    },
    {
      component: 'Input',
      fieldName: 'concurrencyStamp',
      dependencies: {
        triggerFields: ['concurrencyStamp'],
        if() {
          return false;
        },
      },
    },
  ],
  wrapperClass: 'grid-cols-1',
};
