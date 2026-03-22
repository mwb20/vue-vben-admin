<script lang="ts" setup>
import type { TenantCreateDto, TenantUpdateDto } from '#/api/abp-client/types';

import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { useVbenForm } from '#/adapter/form';
import { createTenant, getTenant, updateTenant } from '#/api/abp-client/tenant';
import { onAddConfirm, onEditConfirm } from '#/utils/common-methods';

import { EditFormOptions } from './schema';

const emitReload = defineEmits(['reload']);
const isAdd = ref(true);

const [EditModal, modalApi] = useVbenModal({
  onOpenChange(isOpen: boolean) {
    if (isOpen) {
      const value = modalApi.getData<Record<string, string>>();
      if (!value.id) {
        return;
      }
      isAdd.value = false;
      getTenant({ id: value.id }).then((res) => {
        editFormApi.setValues(res);
      });
    }
  },
  onConfirm: async () => {
    if (isAdd.value) {
      await onAddConfirm(
        editFormApi,
        modalApi,
        createTenant,
        emitReload,
        (data: TenantCreateDto) => data,
      );
      return;
    }
    await onEditConfirm(
      editFormApi,
      modalApi,
      updateTenant,
      emitReload,
      (data: TenantUpdateDto) => data,
    );
  },
  destroyOnClose: true,
});

const [EditForm, editFormApi] = useVbenForm(EditFormOptions);
</script>

<template>
  <EditModal class="w-[50%]">
    <EditForm />
  </EditModal>
</template>
