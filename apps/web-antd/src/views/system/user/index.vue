<script lang="ts" setup>
import { Page, useVbenModal } from '@vben/common-ui';
import { LockKeyhole } from '@vben/icons';

import { Button, Dropdown, Menu, MenuItem, Space, Tag } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import EditFormModal from './edit.vue';
import { MainGridOptions, SearchFormOptions } from './schema';

/**
 * @description: 配置表格组件
 */
const [Grid] = useVbenVxeGrid({
  formOptions: SearchFormOptions,
  gridOptions: MainGridOptions,
  separator: false,
});

/**
 * @description: 配置编辑组件
 */
const [EditModal, EditModalApi] = useVbenModal({
  connectedComponent: EditFormModal,
});

/**
 * @description: 编辑
 */
function onEdit(row: any) {
  EditModalApi.setState({ title: '编辑' })
    .setData({
      id: row.id,
    })
    .open();
}
/**
 * @description: 启用/禁用
 */
function onEnabled(row: any) {
  // eslint-disable-next-line no-console
  console.log(row);
}
/**
 * @description: 删除
 */
function onDel(row: any) {
  // eslint-disable-next-line no-console
  console.log(row);
}
/**
 * @description: 打开新增窗口
 */
function onAdd() {
  EditModalApi.setState({ title: '新增' }).open();
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
            @click="onAdd"
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
            @click="onEdit(row)"
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
                <MenuItem
                  key="0"
                  v-access:code="'AbpIdentity.Users.Enable'"
                  @click="onEnabled(row)"
                >
                  <span class="flex items-center">
                    <LockKeyhole class="mr-2 size-4" />
                    {{ row.isActive ? $t('abp.disabled') : $t('abp.enabled') }}
                  </span>
                </MenuItem>
                <MenuItem
                  key="1"
                  v-access:code="'AbpIdentity.Users.Delete'"
                  @click="onDel(row)"
                >
                  <span class="flex items-center">
                    <i
                      class="icon-[material-symbols--delete-outline] mr-2 size-4"
                    ></i>
                    {{ $t('abp.delete') }}
                  </span>
                </MenuItem>
                <MenuItem
                  key="2"
                  v-access:code="'AbpIdentity.Users.Delete'"
                  @click="onDel(row)"
                >
                  <span class="flex items-center">
                    <i class="icon-[ic--baseline-lock-reset] mr-2 size-4"></i>
                    {{ $t('abp.resetPassword') }}
                  </span>
                </MenuItem>
              </Menu>
            </template>
          </Dropdown>
        </Space>
      </template>
    </Grid>
    <EditModal />
  </Page>
</template>
