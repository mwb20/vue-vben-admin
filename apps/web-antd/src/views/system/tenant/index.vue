<script lang="ts" setup>
import { Page, useVbenModal } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { Button, Space } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { deleteTenant } from '#/api/abp-client/tenant';
import { onAdd, onDel, onEdit } from '#/utils/common-methods';

import EditFormModal from './edit.vue';
import { MainGridOptions, SearchFormOptions } from './schema';

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions: SearchFormOptions,
  gridOptions: MainGridOptions,
  separator: true,
});

const [EditModal, EditModalApi] = useVbenModal({
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
            v-access:code="'AbpTenantManagement.Tenants.Create'"
            @click="onAdd(EditModalApi)"
          >
            {{ $t('abp.add') }}
          </Button>
        </Space>
      </template>
      <template #action="{ row }">
        <Space>
          <Button
            size="small"
            type="primary"
            v-access:code="'AbpTenantManagement.Tenants.Update'"
            @click="onEdit(EditModalApi, { id: row.id })"
          >
            {{ $t('abp.edit') }}
          </Button>
          <Button
            size="small"
            type="primary"
            v-access:code="'AbpTenantManagement.Tenants.Delete'"
            @click="onDel(gridApi, row, deleteTenant)"
          >
            {{ $t('abp.delete') }}
          </Button>
        </Space>
      </template>
    </Grid>
    <EditModal @reload="gridApi.reload" />
  </Page>
</template>
