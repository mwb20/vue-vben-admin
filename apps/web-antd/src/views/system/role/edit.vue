<script lang="ts" setup>
import type {
  IdentityRoleCreateDto,
  IdentityRoleUpdateDto,
} from '#/api/abp-client/index';

import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { useVbenForm } from '#/adapter/form';
import { createRole, getRole, updateRole } from '#/api/abp-client/index';
import { onAddConfirm, onEditConfirm } from '#/components/common/methods';

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
      // 存在id，不是新增，而是编辑
      isAdd.value = false;
      // 获取用户详情
      getRole({ id: value.id }).then((res) => {
        editFormApi.setValues(res);
      });
    }
  },
  onConfirm: async () => {
    if (isAdd.value) {
      await onAddConfirm(
        editFormApi,
        modalApi,
        createRole,
        emitReload,
        (data: IdentityRoleCreateDto) => {
          return data;
        },
      );
      return;
    }
    await onEditConfirm(
      editFormApi,
      modalApi,
      updateRole,
      emitReload,
      (data: IdentityRoleUpdateDto) => {
        return data;
      },
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
