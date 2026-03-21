<script lang="ts" setup>
import { Page, useVbenModal } from '@vben/common-ui';

import { Button, Space, Tag } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { deleteDictionaries } from '#/api/abp-client';
import { onAdd, onDel, onEdit } from '#/utils/common-methods';

import EditFormModal from './edit.vue';
import { MainGridOptions, SearchFormOptions } from './schema';

function onAddChild(modalApi: any, row: any) {
  modalApi
    .setState({ title: '添加子节点' })
    .setData({ parentId: row.id, parentName: row.name })
    .open();
}

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions: SearchFormOptions,
  gridOptions: MainGridOptions,
  separator: true,
});

const [EditModal, EditModalApi] = useVbenModal({
  title: '编辑数据字典',
  connectedComponent: EditFormModal,
});
</script>
<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <Space align="center">
          <Button
            type="primary"
            v-access:code="'DataDictionary.DataDictionaries.Create'"
            @click="onAdd(EditModalApi)"
          >
            新增
          </Button>
        </Space>
      </template>
      <template #is-active="{ row }">
        <Tag v-if="row.isActive" color="green">启用</Tag>
        <Tag v-else color="orange">禁用</Tag>
      </template>
      <template #action="{ row }">
        <Space>
          <Button
            size="small"
            type="primary"
            v-access:code="'DataDictionary.DataDictionaries.Create'"
            @click="onAddChild(EditModalApi, row)"
          >
            添加子节点
          </Button>
          <Button
            size="small"
            type="primary"
            v-access:code="'DataDictionary.DataDictionaries.Update'"
            @click="onEdit(EditModalApi, { id: row.id })"
          >
            {{ $t('abp.edit') }}
          </Button>
          <Button
            size="small"
            type="primary"
            v-access:code="'DataDictionary.DataDictionaries.Delete'"
            @click="onDel(gridApi, row, deleteDictionaries)"
          >
            {{ $t('abp.delete') }}
          </Button>
        </Space>
      </template>
    </Grid>
    <EditModal @reload="gridApi.reload" />
  </Page>
</template>
