<script lang="ts" setup>
import { AccessControl } from '@vben/access';
import { Page, useVbenModal } from '@vben/common-ui';
import { LockKeyhole } from '@vben/icons';

import { Button, Dropdown, Menu, MenuItem, Space, Tag } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { onAdd, onDel, onEdit } from '#/components/common/methods';

import AddFormModal from './add.vue';
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

const [AddModal, AddModalApi] = useVbenModal({
  title: '新增用户',
  connectedComponent: AddFormModal,
});

/**
 * @description: 配置编辑组件
 */
const [EditModal, EditModalApi] = useVbenModal({
  title: '编辑用户',
  connectedComponent: EditFormModal,
});
/**
 * @description: 启用/禁用
 */
function onEnabled(row: any) {
  // eslint-disable-next-line no-console
  console.log(row);
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
            @click="onAdd(AddModalApi)"
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
            @click="onEdit(EditModalApi, row)"
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
                  :codes="['AbpIdentity.Users.Update']"
                  type="code"
                >
                  <MenuItem key="0" @click="onEnabled(row)">
                    <span class="flex items-center">
                      <LockKeyhole class="mr-2 size-4" />
                      {{
                        row.isActive ? $t('abp.disabled') : $t('abp.enabled')
                      }}
                    </span>
                  </MenuItem>
                </AccessControl>
                <AccessControl
                  :codes="['AbpIdentity.Users.Delete']"
                  type="code"
                >
                  <MenuItem key="1" @click="onDel(row)">
                    <span class="flex items-center">
                      <i
                        class="icon-[material-symbols--delete-outline] mr-2 size-4"
                      ></i>
                      {{ $t('abp.delete') }}
                    </span>
                  </MenuItem>
                </AccessControl>
                <AccessControl
                  :codes="['AbpIdentity.Users.Delete']"
                  type="code"
                >
                  <MenuItem key="2" @click="onDel(row)">
                    <span class="flex items-center">
                      <i class="icon-[ic--baseline-lock-reset] mr-2 size-4"></i>
                      {{ $t('abp.resetPassword') }}
                    </span>
                  </MenuItem>
                </AccessControl>
              </Menu>
            </template>
          </Dropdown>
        </Space>
      </template>
    </Grid>
    <AddModal />
    <EditModal @reload="gridApi.reload" />
  </Page>
</template>
