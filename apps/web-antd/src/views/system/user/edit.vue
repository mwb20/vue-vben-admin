<script lang="ts" setup>
import type { CheckboxOptionType } from 'ant-design-vue';
import type { CheckboxValueType } from 'ant-design-vue/es/checkbox/interface';

import type {
  IdentityUserCreateDto,
  IdentityUserUpdateDto,
} from '#/api/abp-client/index';

import { ref } from 'vue';

import { useAccess } from '@vben/access';
import { useVbenModal } from '@vben/common-ui';

import { CheckboxGroup, TabPane, Tabs } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import {
  createUser,
  getUser,
  getUserAssignableRoles,
  getUserRoles,
  updateUser,
} from '#/api/abp-client/index';
import { onAddConfirm, onEditConfirm } from '#/utils/common-methods';

import { EditFormOptions } from './schema';

const emitReload = defineEmits(['reload']);
const { hasAccessByCodes } = useAccess();
const isAdd = ref(true);
const [EditModal, modalApi] = useVbenModal({
  onOpenChange(isOpen: boolean) {
    if (isOpen) {
      // 获取所有角色列表
      getRoles();
      const value = modalApi.getData<Record<string, string>>();
      if (!value.id) {
        return;
      }
      // 存在id，不是新增，而是编辑
      isAdd.value = false;
      // 获取用户详情
      getUser({ id: value.id }).then((res) => {
        editFormApi.setValues(res);
      });
      // 获取用户已分配的角色列表
      getEditUserRoles(value.id);
    }
  },
  onConfirm: async () => {
    if (isAdd.value) {
      await onAddConfirm(
        editFormApi,
        modalApi,
        createUser,
        emitReload,
        (data: IdentityUserCreateDto) => {
          data.roleNames = checkedRoles.value.map((item) => item.toString());
          return data;
        },
      );
      return;
    }
    await onEditConfirm(
      editFormApi,
      modalApi,
      updateUser,
      emitReload,
      (data: IdentityUserUpdateDto) => {
        data.roleNames = checkedRoles.value.map((item) => item.toString());
        return data;
      },
    );
  },
  destroyOnClose: true,
});

const [EditForm, editFormApi] = useVbenForm(EditFormOptions);

const rolesList = ref<CheckboxOptionType[]>([]);
const checkedRoles = ref<CheckboxValueType[]>([]);

/**
 * 获取用户可分配的角色列表
 */
function getRoles() {
  getUserAssignableRoles().then((res) => {
    rolesList.value =
      res.items?.map(
        (item) =>
          ({
            label: item.name,
            value: item.name,
          }) as CheckboxOptionType,
      ) || [];
  });
}

/**
 * 获取用户已分配的角色列表
 */
function getEditUserRoles(userId: string) {
  getUserRoles({ id: userId }).then((res) => {
    checkedRoles.value = res.items?.map((item) => item.name || '') || [];
  });
}
</script>
<template>
  <EditModal class="w-[60%]">
    <Tabs>
      <TabPane key="1" tab="用户信息">
        <EditForm />
      </TabPane>
      <template
        v-if="hasAccessByCodes(['AbpIdentity.Users.Update.ManageRoles'])"
      >
        <TabPane key="2" tab="角色">
          <CheckboxGroup
            v-model:value="checkedRoles"
            :options="rolesList"
            name="checkboxgroup"
            option-label-prop="name"
            option-value-prop="id"
          />
        </TabPane>
      </template>
    </Tabs>
  </EditModal>
</template>
