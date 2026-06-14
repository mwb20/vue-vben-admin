<script lang="ts" setup>
import { Page, useVbenModal } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { Button, message, Space, Tag } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { deleteRole } from '#/api/abp-client';
import PermissionManage from '#/components/permission-manage/index.vue';
import { onAdd, onDel, onEdit } from '#/utils/common-methods';

import EditFormModal from './edit.vue';
import { MainGridOptions, SearchFormOptions } from './schema';

/**
 * @description: 配置表格组件
 */
const [Grid, gridApi] = useVbenVxeGrid({
  formOptions: SearchFormOptions,
  gridOptions: MainGridOptions,
  separator: true,
});

/**
 * @description: 配置编辑组件
 */
const [EditModal, EditModalApi] = useVbenModal({
  title: '编辑角色',
  connectedComponent: EditFormModal,
});

/**
 * @description: 配置权限组件
 */
const [PermissionModal, PermissionModalApi] = useVbenModal({
  title: '权限',
  connectedComponent: PermissionManage,
});

/**
 * @description: 权限
 */
function onPermission(name: string | undefined) {
  if (!name) {
    message.error('请选择角色');
    return;
  }
  PermissionModalApi.setData({ providerName: 'R', providerKey: name });
  PermissionModalApi.open();
}
</script>
<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <Space align="center">
          <Button
            type="primary"
            v-access:code="'AbpIdentity.Users.Create'"
            @click="onAdd(EditModalApi)"
          >
            新增
          </Button>
        </Space>
      </template>
      <template #name="{ row }">
        <span class="role-name-row">{{ row.name }}</span>
        <Tag v-if="row.isDefault" color="#87d068">默认</Tag>
        <Tag v-if="row.isPublic" color="#108ee9">公开</Tag>
      </template>
      <template #action="{ row }">
        <Space>
          <Button
            size="small"
            type="primary"
            v-access:code="'AbpIdentity.Roles.Update'"
            @click="onEdit(EditModalApi, { id: row.id })"
          >
            {{ $t('abp.edit') }}
          </Button>
          <Button
            size="small"
            type="primary"
            v-access:code="'AbpIdentity.Roles.ManagePermissions'"
            @click="onPermission(row.name)"
          >
            {{ $t('abp.permissions') }}
          </Button>
          <Button
            size="small"
            type="primary"
            v-access:code="'AbpIdentity.Roles.Delete'"
            @click="onDel(gridApi, row, deleteRole)"
          >
            {{ $t('abp.delete') }}
          </Button>
        </Space>
      </template>
    </Grid>
    <EditModal @reload="gridApi.reload" />
    <PermissionModal />
  </Page>
</template>

<style lang="css" scoped>
.role-name-row {
  margin-right: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #686b6e;
}
</style>
