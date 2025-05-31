<script lang="ts" setup>
import type { VxeGridProps } from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';

import { Tag } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { getUsers } from '#/api/abp/index';

interface RowType {
  id: string;
  userName: string;
  name: string;
  phoneNumber: string;
  email: string;
  emailConfirmed: boolean;
}

const gridOptions: VxeGridProps<RowType> = {
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
    buttons: [
      {
        code: 'insert_actived',
        name: '新增',
      },
      { code: 'delete', name: '直接删除' },
      { code: 'mark_cancel', name: '删除/取消' },
    ],
    refresh: true, // 显示刷新按钮
    print: true, // 显示打印按钮
    zoom: true, // 显示全屏按钮
    custom: true, // 显示自定义列按钮
  },
  pagerConfig: {},
  proxyConfig: {
    sort: true,
    ajax: {
      query: async ({ page, sort }) => {
        return getUsers({
          filter: null,
          sorting: sort.order ? `${sort.field} ${sort.order}` : null,
          skipCount: (page.currentPage - 1) * page.pageSize,
          maxResultCount: page.pageSize,
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

const [Grid] = useVbenVxeGrid({ gridOptions });
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-tools></template>
      <template #email-confirmed="{ row }">
        <Tag v-if="row.emailConfirmed" color="green">是</Tag>
        <Tag v-if="!row.emailConfirmed" color="orange">否</Tag>
      </template>
    </Grid>
  </Page>
</template>
