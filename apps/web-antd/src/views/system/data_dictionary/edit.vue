<script lang="ts" setup>
import type { CreateUpdateDataDictionariesDto } from '#/api/abp-client/index';

import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { useVbenForm } from '#/adapter/form';
import {
  createDictionarie,
  getDictionarie,
  updateDictionaries,
} from '#/api/abp-client/index';
import { onAddConfirm, onEditConfirm } from '#/utils/common-methods';

import { EditFormOptions } from './schema';

const emitReload = defineEmits(['reload']);
const isAdd = ref(true);
const isChildAdd = ref(false);

const [EditModal, modalApi] = useVbenModal({
  onOpenChange(isOpen: boolean) {
    if (isOpen) {
      const value = modalApi.getData<Record<string, string>>();
      if (value.parentId && !value.id) {
        isAdd.value = true;
        isChildAdd.value = true;
        editFormApi.setValues({
          parentId: value.parentId,
          parentName: value.parentName,
        });
        return;
      }
      if (!value.id) {
        return;
      }
      isAdd.value = false;
      isChildAdd.value = false;
      getDictionarie({ id: value.id }).then((res) => {
        editFormApi.setValues(res);
      });
    }
  },
  onConfirm: async () => {
    if (isAdd.value) {
      await onAddConfirm(
        editFormApi,
        modalApi,
        createDictionarie,
        emitReload,
        (data: CreateUpdateDataDictionariesDto) => {
          return data;
        },
      );
      return;
    }
    await onEditConfirm(
      editFormApi,
      modalApi,
      updateDictionaries,
      emitReload,
      (data: CreateUpdateDataDictionariesDto) => {
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
