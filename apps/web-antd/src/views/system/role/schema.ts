import type { VxeTableGridOptions } from '@vben/plugins/vxe-table';
import type { DeepPartial } from '@vben/types';

import type { VbenFormProps } from '#/adapter/form';

import { requestClient } from '#/api/request';

/**
 * @description: 用户列表数据项
 */
interface RowType {
  id: string;
  name: string;
  isDefault: boolean;
  isPublic: boolean;
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
export const MainGridOptions: DeepPartial<VxeTableGridOptions<RowType>> = {
  checkboxConfig: {
    highlight: true,
  },
  border: true,
  columns: [
    { field: 'id', type: 'checkbox', width: 50 },
    {
      field: 'name',
      title: '角色名称',
      sortable: true,
      minWidth: 80,
      slots: { default: 'name' },
      align: 'left',
    },
    {
      cellRender: { name: 'CellLink', props: { text: '编辑' } },
      field: 'action',
      fixed: 'right',
      title: '操作',
      width: 220,
      slots: { default: 'action' },
    },
  ],
  printConfig: {
    columns: [{ field: 'name' }],
  },
  height: 'auto',
  keepSource: true,
  sortConfig: {
    trigger: 'cell',
    remote: true,
  },
  toolbarConfig: {
    refresh: true, // 显示刷新按钮
    print: false, // 显示打印按钮
    zoom: true, // 显示全屏按钮
    custom: false, // 显示自定义列按钮
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
        return requestClient.get('/api/identity/roles', {
          params: {
            filter: formValues.filter,
            sorting: sort.order ? `${sort.field} ${sort.order}` : undefined,
            skipCount: (page.currentPage - 1) * page.pageSize,
            maxResultCount: page.pageSize,
          },
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
      component: 'Input',
      componentProps: {
        placeholder: '请输入角色名称',
      },
      fieldName: 'name',
      label: '角色名称',
    },
    {
      component: 'Switch',
      defaultValue: false,
      fieldName: 'isDefault',
      label: '默认角色',
    },
    {
      component: 'Switch',
      defaultValue: false,
      fieldName: 'isPublic',
      label: '公开角色',
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
