import type { VxeTableGridOptions } from '@vben/plugins/vxe-table';
import type { DeepPartial } from '@vben/types';

import type { VbenFormProps } from '#/adapter/form';

import { z } from '#/adapter/form';
import { requestClient } from '#/api/request';

/**
 * @description: 数据字典列表数据项
 */
interface RowType {
  id: string;
  code: string;
  name: string;
  value: string;
  description: string;
  isActive: boolean;
  parentId: string;
  sort: number;
  hasChildren: boolean;
  creationTime: string;
  creatorId: string;
  lastModificationTime: string;
  lastModifierId: string;
}

/**
 * 搜索表单配置
 */
export const SearchFormOptions: VbenFormProps = {
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
  showCollapseButton: false,
  submitButtonOptions: {
    content: '查询',
  },
  submitOnChange: false,
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
    {
      field: 'code',
      title: '字典编码',
      minWidth: 160,
      align: 'left',
      treeNode: true,
    },
    {
      field: 'name',
      title: '字典名称',
      minWidth: 180,
      sortable: true,
    },
    {
      field: 'value',
      title: '字典值',
      minWidth: 120,
    },
    {
      field: 'description',
      title: '描述',
      minWidth: 150,
      showOverflow: true,
    },
    {
      field: 'isActive',
      title: '状态',
      minWidth: 80,
      slots: { default: 'is-active' },
    },
    {
      field: 'sort',
      title: '排序',
      minWidth: 80,
      sortable: true,
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
      width: 260,
      slots: { default: 'action' },
    },
  ],
  printConfig: {
    columns: [
      { field: 'code' },
      { field: 'name' },
      { field: 'value' },
      { field: 'description' },
      { field: 'isActive' },
      { field: 'sort' },
      { field: 'creationTime' },
    ],
  },
  treeConfig: {
    parentField: 'parentId',
    lazy: true,
    hasChildField: 'hasChildren',
    showIcon: true,
    showLine: false,
    indent: 20,
    padding: true,
    loadMethod: (params: { row: RowType }): Promise<any[]> => {
      const { row } = params;
      return requestClient.get('/api/DataDictionary/Dictionaries/Children', {
        params: {
          parentId: row.id,
        },
      });
    },
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
        return requestClient.get('/api/DataDictionary/Dictionaries', {
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
export const EditFormOptions: VbenFormProps = {
  commonConfig: {
    labelWidth: 100,
  },
  showDefaultActions: false,
  layout: 'horizontal',
  schema: [
    {
      component: 'Input',
      fieldName: 'parentName',
      label: '父节点',
      dependencies: {
        triggerFields: ['parentId'],
        disabled: true,
        if(values) {
          if (values.parentId) {
            return true;
          }
          return false;
        },
      },
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入字典编码',
      },
      fieldName: 'code',
      label: '字典编码',
      rules: z.string().min(1, '请输入字典编码'),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入字典名称',
      },
      fieldName: 'name',
      label: '字典名称',
      rules: z.string().min(1, '请输入字典名称'),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入字典值',
      },
      fieldName: 'value',
      label: '字典值',
      rules: z.string().min(1, '请输入字典值'),
    },
    {
      component: 'Textarea',
      componentProps: {
        placeholder: '请输入描述',
        rows: 3,
      },
      fieldName: 'description',
      label: '描述',
    },
    {
      component: 'InputNumber',
      componentProps: {
        placeholder: '请输入排序',
        style: {
          width: '100%',
        },
      },
      fieldName: 'sort',
      label: '排序',
    },
    {
      component: 'Switch',
      defaultValue: true,
      fieldName: 'isActive',
      label: '是否启用',
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
      fieldName: 'parentId',
      dependencies: {
        triggerFields: ['parentId'],
        if() {
          return false;
        },
      },
    },
  ],
  wrapperClass: 'grid-cols-1',
};
