import type { VbenFormProps } from '#/adapter/form';
import type { VxeGridProps } from '#/adapter/vxe-table';

import { z } from '#/adapter/form';
import { requestClient } from '#/api/request';

/**
 * @description: 用户列表数据项
 */
interface RowType {
  id: string;
  userName: string;
  name: string;
  phoneNumber: string;
  email: string;
  emailConfirmed: string;
  creationTime: string;
}

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
export const MainGridOptions: VxeGridProps<RowType> = {
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

/** -------------编辑页面相关配置------------- */
// 编辑表单配置
export const EditFormOptions: VbenFormProps = {
  // 所有表单项共用，可单独在表单内覆盖
  commonConfig: {
    // 所有表单项的label宽度
    labelWidth: 80,
  },
  showDefaultActions: false,
  // 提交函数
  // handleSubmit: onSubmit,
  // 垂直布局，label和input在不同行，值为vertical
  // 水平布局，label和input在同一行
  layout: 'horizontal',
  schema: [
    {
      // 组件需要在 #/adapter.ts内注册，并加上类型
      component: 'Input',
      // 对应组件的参数
      componentProps: {
        placeholder: '请输入用户名称',
      },
      // 字段名
      fieldName: 'userName',
      // 界面显示的label
      label: '用户名',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入姓氏',
      },
      fieldName: 'surname',
      label: '姓',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入名',
      },
      fieldName: 'name',
      label: '名',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入邮箱',
      },
      fieldName: 'email',
      label: '邮箱',
      rules: z.string().email('请输入正确的邮箱'),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入手机号',
      },
      fieldName: 'phoneNumber',
      label: '手机号',
    },
    {
      component: 'InputPassword',
      componentProps: {
        placeholder: '请输入密码',
      },
      fieldName: 'password',
      label: '密码',
      dependencies: {
        triggerFields: ['id'],
        required(values) {
          return !values.id;
        },
      },
    },
    {
      component: 'InputPassword',
      componentProps: {
        placeholder: '请输入确认密码',
      },
      fieldName: 'confirmPassword',
      label: '确认密码',
      dependencies: {
        triggerFields: ['password'],
        if(values) {
          const noPassword = !values.password;
          if (noPassword) {
            // 没有密码时清空确认密码
            values.confirmPassword = null;
          }
          return !noPassword;
        },
        rules(value) {
          return z
            .string(value)
            .min(1, { message: '请输入确认密码' })
            .refine(
              (zvalue) => {
                return zvalue === value.password;
              },
              {
                message: '两次输入密码不一致',
              },
            );
        },
      },
    },
    {
      component: 'Switch',
      defaultValue: true,
      fieldName: 'isActive',
      label: '启用',
    },
    {
      component: 'Switch',
      defaultValue: false,
      fieldName: 'lockoutEnabled',
      label: '账户锁定',
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
  wrapperClass: 'grid-cols-2',
};
