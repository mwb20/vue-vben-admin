<script lang="ts" setup>
import { useVbenModal } from '@vben/common-ui';

import { TabPane, Tabs } from 'ant-design-vue';

import { useVbenForm, z } from '#/adapter/form';
import { onConfirm } from '#/components/common/methods';

const emit = defineEmits(['reload']);
const [EditModal, modalApi] = useVbenModal({
  onOpenChange(isOpen: boolean) {
    if (isOpen) {
      const value = modalApi.getData<Record<string, any>>();
      editFormApi.setValues(value);
    }
  },
  onConfirm: onFormConfirm,
  destroyOnClose: true,
});

const [EditForm, editFormApi] = useVbenForm({
  // 所有表单项共用，可单独在表单内覆盖
  commonConfig: {
    // 所有表单项
    labelWidth: 80,
  },
  showDefaultActions: false,
  // 提交函数
  // handleSubmit: onSubmit,
  // 垂直布局，label和input在不同行，值为vertical
  // 水平布局，label和input在同一行
  layout: 'horizontal',
  schema: [
    {
      // 组件需要在 #/adapter.ts内注册，并加上类型
      component: 'Input',
      // 对应组件的参数
      componentProps: {
        placeholder: '请输入用户名称',
      },
      // 字段名
      fieldName: 'userName',
      // 界面显示的label
      label: '用户名',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入姓氏',
      },
      fieldName: 'surname',
      label: '姓',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入名',
      },
      fieldName: 'name',
      label: '名',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入邮箱',
      },
      fieldName: 'email',
      label: '邮箱',
      rules: z.string().email('请输入正确的邮箱'),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入手机号',
      },
      fieldName: 'phoneNumber',
      label: '手机号',
    },
    {
      component: 'InputPassword',
      componentProps: {
        placeholder: '请输入密码',
      },
      fieldName: 'password',
      label: '密码',
    },
    {
      component: 'InputPassword',
      componentProps: {
        placeholder: '请输入确认密码',
      },
      fieldName: 'confirmPassword',
      label: '确认密码',
      dependencies: {
        triggerFields: ['password'],
        if(values) {
          const noPassword = !values.password;
          if (noPassword) {
            // 没有密码时清空确认密码
            values.confirmPassword = null;
          }
          return !noPassword;
        },
        rules(value) {
          return z
            .string(value)
            .min(1, { message: '请输入确认密码' })
            .refine(
              (zvalue) => {
                return zvalue === value.password;
              },
              {
                message: '两次输入密码不一致',
              },
            );
        },
      },
    },
    {
      component: 'Switch',
      defaultValue: true,
      fieldName: 'isActive',
      label: '启用',
    },
    {
      component: 'Switch',
      defaultValue: false,
      fieldName: 'lockoutEnabled',
      label: '账户锁定',
    },
    {
      component: 'Input',
      fieldName: 'id',
      dependencies: {
        triggerFields: ['id'],
        if() {
          return false;
        },
      },
    },
    {
      component: 'Input',
      fieldName: 'concurrencyStamp',
      dependencies: {
        triggerFields: ['concurrencyStamp'],
        if() {
          return false;
        },
      },
    },
  ],
  wrapperClass: 'grid-cols-2',
});

async function onFormConfirm() {
  await onConfirm(editFormApi, modalApi, emit, '/api/identity/users/');
}
</script>
<template>
  <EditModal class="w-[60%]">
    <Tabs>
      <TabPane key="1" tab="用户信息">
        <EditForm />
      </TabPane>
      <TabPane key="2" tab="角色">
        <CheckboxGroup
          v-model:value="checkedRoles"
          :options="rolesList"
          name="checkboxgroup"
        />
      </TabPane>
    </Tabs>
  </EditModal>
</template>
