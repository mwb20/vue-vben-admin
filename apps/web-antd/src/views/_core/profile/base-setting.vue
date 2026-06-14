<script setup lang="ts">
import type { Recordable } from '@vben/types';

import type { VbenFormSchema } from '#/adapter/form';
import type { UpdateProfileDto } from '#/api/abp-client/types';

import { computed, onMounted, ref } from 'vue';

import { ProfileBaseSetting } from '@vben/common-ui';
import { useUserStore } from '@vben/stores';

import { message } from 'ant-design-vue';

import { z } from '#/adapter/form';
import { getMyProfile, updateMyProfile } from '#/api/abp-client/index';

const profileBaseSettingRef = ref();

const formSchema = computed((): VbenFormSchema[] => {
  return [
    {
      fieldName: 'userName',
      component: 'Input',
      label: '用户名',
      disabled: true,
    },
    {
      fieldName: 'name',
      component: 'Input',
      label: '姓名',
      rules: 'required',
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
  ];
});

onMounted(async () => {
  const data = await getMyProfile();
  profileBaseSettingRef.value.getFormApi().setValues(data);
});

async function saveProfile(values: Recordable<any>) {
  try {
    await updateMyProfile(values as UpdateProfileDto);
    // 更新用户信息成功后更新本地用户姓名
    const userStore = useUserStore();
    const userInfo = userStore.userInfo;
    if (!userInfo) {
      return;
    }
    userInfo.realName = values.name;
    userStore.setUserInfo(userInfo);
    message.success('更新成功');
  } catch {
    // 忽略异常
  }
}
</script>
<template>
  <ProfileBaseSetting
    ref="profileBaseSettingRef"
    :form-schema="formSchema"
    @submit="saveProfile"
  />
</template>
