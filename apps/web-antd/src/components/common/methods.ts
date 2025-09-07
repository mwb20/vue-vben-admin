import type { ExtendedFormApi, ExtendedModalApi } from '@vben/common-ui';

import { message } from 'ant-design-vue';

import { requestClient } from '#/api/request';

export async function onConfirm(
  formApi: ExtendedFormApi,
  modalApi: ExtendedModalApi,
  emit: (event: 'reload', ...args: any[]) => void,
  url: string,
) {
  const { valid } = await formApi.validate();
  if (!valid) {
    return;
  }
  const formValues = await formApi.getValues();
  modalApi.setState({ loading: true, confirmLoading: true });
  await requestClient
    .put(url + formValues.id, formValues)
    .then(() => {
      // 保存成功后，关闭弹窗，避免模态框关闭不销毁时再次打开会显示加载
      modalApi.setState({ loading: false, confirmLoading: false });
      modalApi.close();
      message.success('保存成功');
      // 保存成功后触发事件
      emit('reload');
    })
    .catch(() => {
      modalApi.setState({ loading: false, confirmLoading: false });
    });
}

export function onAdd(modalApi: ExtendedModalApi) {
  modalApi.setState({ title: '新增' }).open();
}

export function onEdit(modalApi: ExtendedModalApi, row: any) {
  modalApi.setState({ title: '编辑' }).setData(row).open();
}

export function onDel(row: any) {
  // eslint-disable-next-line no-console
  console.log(row);
}
