import type { ExtendedFormApi, ExtendedModalApi } from '@vben/common-ui';

import { message, Modal } from 'ant-design-vue';

/**
 * 新增确认
 * @param formApi 表单api
 * @param modalApi 弹窗api
 * @param callApi 调用api
 * @param emit 事件
 */
export async function onAddConfirm<T1, P>(
  formApi: ExtendedFormApi,
  modalApi: ExtendedModalApi,
  callApi: (data: T1) => Promise<P>,
  emit: (event: 'reload', ...args: any[]) => void,
  requestDataHandle?: (data: T1) => T1,
) {
  // 校验表单
  const { valid } = await formApi.validate();
  if (!valid) {
    return;
  }
  // 获取表单值
  const formValues = await formApi.getValues();
  // 转换为T1类型
  const data = requestDataHandle?.(formValues as T1) || (formValues as T1);
  // 显示提交等待
  modalApi.setState({ loading: true, confirmLoading: true });
  // 调用api
  await callApi(data)
    .then(() => {
      // 保存成功后，关闭弹窗，避免模态框关闭不销毁时再次打开会显示加载
      modalApi.setState({ loading: false, confirmLoading: false });
      modalApi.close();
      message.success('新增成功');
      // 保存成功后触发事件
      emit('reload');
    })
    .catch(() => {
      modalApi.setState({ loading: false, confirmLoading: false });
    });
}

/**
 * 编辑确认
 * @param formApi 表单api
 * @param modalApi 弹窗api
 * @param callApi 调用api
 * @param emit 事件
 */
export async function onEditConfirm<T1, T2, P>(
  formApi: ExtendedFormApi,
  modalApi: ExtendedModalApi,
  callApi: (params: T1, data: T2) => Promise<P>,
  emit: (event: 'reload', ...args: any[]) => void,
  requestDataHandle?: (data: T2) => T2,
) {
  // 校验表单
  const { valid } = await formApi.validate();
  if (!valid) {
    return;
  }
  // 获取表单值
  const formValues = await formApi.getValues();
  // 转换为T2类型
  const data = requestDataHandle?.(formValues as T2) || (formValues as T2);
  // 显示提交等待
  modalApi.setState({ loading: true, confirmLoading: true });
  // 调用api
  await callApi({ id: formValues.id } as T1, data)
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

/**
 * 新增按钮点击事件
 * @param modalApi 新增弹窗api
 */
export function onAdd(modalApi: ExtendedModalApi) {
  modalApi.setState({ title: '新增' }).open();
}

/**
 * 编辑按钮点击事件
 * @param modalApi 编辑弹窗api
 * @param row 行数据
 */
export function onEdit(modalApi: ExtendedModalApi, row: any) {
  modalApi.setState({ title: '编辑' }).setData(row).open();
}

/**
 * 删除按钮点击事件
 * @param gridApi 表格api
 * @param row 行数据
 * @param callApi 删除api
 */
export function onDel<T>(
  gridApi: any,
  row: any,
  callApi: (params: T) => Promise<void>,
) {
  Modal.confirm({
    title: '确认删除吗？',
    content: '删除后不可恢复',
    okText: '确认',
    cancelText: '取消',
    onOk() {
      // 显示提交等待
      gridApi.setLoading(true);
      // 调用删除api
      callApi({ id: row.id } as T)
        .then(() => {
          // 隐藏提交等待
          gridApi.setLoading(false);
          gridApi.reload();
        })
        .catch(() => {
          // 隐藏提交等待
          gridApi.setLoading(false);
        });
    },
  });
}
