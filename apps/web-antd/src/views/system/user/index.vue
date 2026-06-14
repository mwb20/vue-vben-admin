<script lang="ts" setup>
import { AccessControl } from '@vben/access';
import { Page, useVbenModal } from '@vben/common-ui';
import { $t } from '@vben/locales';

import {
  Button,
  Dropdown,
  Menu,
  MenuItem,
  message,
  Space,
  Tag,
} from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { deleteUser } from '#/api/abp-client';
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
  title: '编辑用户',
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
function onPermission(id: string | undefined) {
  if (!id) {
    message.error('请选择用户');
    return;
  }
  PermissionModalApi.setData({ providerName: 'U', providerKey: id });
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
      <template #email-confirmed="{ row }">
        <Tag v-if="row.emailConfirmed" color="green">是</Tag>
        <Tag v-if="!row.emailConfirmed" color="orange">否</Tag>
      </template>
      <template #action="{ row }">
        <Space>
          <Button
            size="small"
            type="primary"
            v-access:code="'AbpIdentity.Users.Update'"
            @click="onEdit(EditModalApi, { id: row.id })"
          >
            {{ $t('abp.edit') }}
          </Button>
          <Dropdown>
            <a
              href="javascript:;"
              class="icon-[material-symbols--more-vert] flex size-4"
            ></a>
            <template #overlay>
              <Menu>
                <AccessControl
                  :codes="['AbpIdentity.Users.ManagePermissions']"
                  type="code"
                >
                  <MenuItem
                    key="2"
                    @click="onPermission(row.id)"
                    @reload="gridApi.reload"
                  >
                    <span class="flex items-center">
                      <i class="icon-[ic--baseline-lock-reset] mr-2 size-4"></i>
                      {{ $t('abp.permissions') }}
                    </span>
                  </MenuItem>
                </AccessControl>
                <AccessControl
                  :codes="['AbpIdentity.Users.Delete']"
                  type="code"
                >
                  <MenuItem
                    key="1"
                    @click="onDel(gridApi, row, deleteUser)"
                    @reload="gridApi.reload"
                  >
                    <span class="flex items-center">
                      <i
                        class="icon-[material-symbols--delete-outline] mr-2 size-4"
                      ></i>
                      {{ $t('abp.delete') }}
                    </span>
                  </MenuItem>
                </AccessControl>
              </Menu>
            </template>
          </Dropdown>
        </Space>
      </template>
    </Grid>
    <EditModal @reload="gridApi.reload" />
    <PermissionModal />
  </Page>
</template>
