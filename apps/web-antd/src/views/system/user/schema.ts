import type { VbenFormProps } from '#/adapter/form';
import type { VxeGridProps } from '#/adapter/vxe-table';

import { requestClient } from '#/api/request';

/**
 * 搜索表单配置
 */
export const SearchFormOptions: VbenFormProps = {
  // 默认展开
  collapsed: false,
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入查询关键字',
      },
      defaultValue: '',
      fieldName: 'filter',
      label: '搜索',
    },
  ],
  // 控制表单是否显示折叠按钮
  showCollapseButton: false,
  submitButtonOptions: {
    content: '查询',
  },
  // 是否在字段值改变时提交表单
  submitOnChange: false,
  // 按下回车时是否提交表单
  submitOnEnter: true,
  compact: false,
  wrapperClass: 'grid-cols-2 md:grid-cols-2',
};

/**
 * 主表格配置
 */
export const MainGridOptions: VxeGridProps<any> = {
  checkboxConfig: {
    highlight: true,
  },
  border: true,
  columns: [
    { field: 'id', type: 'checkbox', width: 50 },
    { field: 'userName', title: '用户名', minWidth: 80, sortable: true },
    { field: 'name', title: '姓名', sortable: true, minWidth: 80 },
    { field: 'phoneNumber', title: '手机号', minWidth: 150 },
    { field: 'email', title: '邮箱', minWidth: 150 },
    {
      field: 'emailConfirmed',
      slots: { default: 'email-confirmed' },
      title: '验证邮箱',
      minWidth: 75,
    },
    {
      field: 'creationTime',
      title: '创建时间',
      formatter: 'formatDateTime',
      minWidth: 150,
    },
    {
      cellRender: { name: 'CellLink', props: { text: '编辑' } },
      field: 'action',
      fixed: 'right',
      title: '操作',
      width: 150,
      slots: { default: 'action' },
    },
  ],
  printConfig: {
    columns: [
      { field: 'userName' },
      { field: 'name' },
      { field: 'phoneNumber' },
      { field: 'email' },
      { field: 'emailConfirmed' },
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
    refresh: true, // 显示刷新按钮
    print: true, // 显示打印按钮
    zoom: true, // 显示全屏按钮
    custom: true, // 显示自定义列按钮
  },
  pagerConfig: {},
  proxyConfig: {
    sort: true,
    response: {
      result: 'items',
      total: 'totalCount',
    },
    ajax: {
      query: async ({ page, sort }, formValues) => {
        return requestClient.get('/api/identity/users', {
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
