<script lang="ts" setup>
import type { DataNode, EventDataNode } from 'ant-design-vue/es/tree';

import type {
  PermissionGrantInfoDto,
  PermissionGroupDto,
  UpdatePermissionsDto,
} from '#/api/abp-client';

import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { message, TabPane, Tabs, Tree } from 'ant-design-vue';

import { getPermissions, updatePermissions } from '#/api/abp-client';

// 权限组列表，用于存储权限分组
const permissionGroups = ref<PermissionGroupDto[]>([]);
// 修改 activeKey 的初始值
const activeKey = ref<string>('');
// 所有权限列表，用于暂存所有权限
const allPermissions = ref<PermissionGrantInfoDto[]>([]);
// 已选权限键值对，用于存储选中的权限
const checkedKeys = ref<{ checked: string[]; halfChecked: string[] }>({
  checked: [],
  halfChecked: [],
});

const permissionsParams = ref<{
  providerKey: string;
  providerName: string;
}>({
  providerName: '',
  providerKey: '',
});

// 或者在获取数据后设置默认激活的标签页
const [PermissionModal, permissionModalApi] = useVbenModal({
  onOpenChange(isOpen: boolean) {
    if (!isOpen) {
      // 模态框关闭时重置所有状态
      permissionGroups.value = [];
      activeKey.value = '';
      allPermissions.value = [];
      checkedKeys.value.checked = [];
      return;
    }
    // 获取传入模态框的 providerName 和 providerKey
    const value = permissionModalApi.getData<Record<string, any>>();
    permissionsParams.value.providerName = value.providerName;
    permissionsParams.value.providerKey = value.providerKey;

    // 调用Api获取权限
    getPermissions(permissionsParams.value).then((res) => {
      permissionGroups.value = res.groups || [];
      // 设置第一个权限组为默认激活
      activeKey.value =
        permissionGroups.value.length > 0
          ? permissionGroups.value[0]?.name || ''
          : '';

      // 展开并暂存所有权限组
      allPermissions.value = permissionGroups.value.flatMap(
        (group) => group.permissions || [],
      );

      // 初始化选中的权限
      checkedKeys.value.checked = allPermissions.value
        .filter((permission) => permission.isGranted)
        .map((permission) => permission.name || '');
    });
  },
  onConfirm: async () => {
    // 从已选权限列表和原始权限列表中过滤出有变更的权限
    const changePermission = allPermissions.value
      .filter(
        (permission) =>
          // 原始权限为false，且选中了当前权限说明已发生变更
          (permission.isGranted !== true &&
            checkedKeys.value.checked.includes(permission.name || '')) ||
          // 原始权限为true，且未选中当前权限说明已发生变更
          (permission.isGranted === true &&
            !checkedKeys.value.checked.includes(permission.name || '')),
      )
      .map((permission) => ({
        name: permission.name || '',
        isGranted: checkedKeys.value.checked.includes(permission.name || ''),
      }));

    // 处理提交事件
    if (changePermission.length === 0) {
      permissionModalApi.close();
      return;
    }
    const data: UpdatePermissionsDto = {
      permissions: changePermission,
    };
    // 调用Api更新权限
    updatePermissions(permissionsParams.value, data).then(() => {
      message.success('权限设置成功');
      permissionModalApi.close();
    });
  },
  destroyOnClose: true,
});

/**
 * 递归查找所有上级节点
 * @param node 当前节点
 * @param parentKeys 存储上级节点key的数组
 */
function getAllParentKeys(node: DataNode, parentKeys: string[] = []): string[] {
  const parent = node.parent;
  if (parent && parent.key) {
    parentKeys.push(parent.key as string);
    return getAllParentKeys(parent, parentKeys);
  }
  return parentKeys;
}

/**
 * 处理权限选择变化
 */
function handleCheck(
  _checked: any,
  info: { checked: boolean; node: EventDataNode },
) {
  const { node, checked: isChecked } = info;
  const permissionName = node.key as string;

  if (isChecked) {
    // 选中时，添加当前节点和所有上级节点
    const allParentKeys = getAllParentKeys(node);

    // 使用Set去重，避免重复添加
    const keysToAdd = new Set([permissionName, ...allParentKeys]);

    // 添加所有需要选中的节点
    keysToAdd.forEach((key) => {
      if (!checkedKeys.value.checked.includes(key)) {
        checkedKeys.value.checked.push(key);
      }
    });
  } else {
    // 取消选择时，从选中列表中移除所有下级权限
    checkedKeys.value.checked = checkedKeys.value.checked.filter(
      (key) => !key.startsWith(permissionName),
    );
  }
}

/**
 * 转换为树形结构
 * @param permissions
 * @returns 树形结构
 */
function getTreeData(
  permissions: PermissionGrantInfoDto[],
  parentName: null | string,
): DataNode[] {
  // 过滤出当前层级的节点
  const currentLevelNodes = permissions.filter(
    (permission) => permission.parentName === parentName,
  );

  // 递归构建树形结构
  return currentLevelNodes.map((node) => ({
    ...node,
    key: node.name || '',
    title: node.displayName || node.name || '',
    children: getTreeData(permissions, node.name || ''),
  }));
}
</script>
<template>
  <PermissionModal class="w-[60%]">
    <Tabs tab-position="left" v-model:active-key="activeKey">
      <TabPane
        v-for="item in permissionGroups"
        :tab="item.displayName"
        :key="item.name"
      >
        <!-- 以树形展示分组下的权限 -->
        <Tree
          :tree-data="getTreeData(item.permissions || [], null)"
          checkable
          :check-strictly="true"
          :default-expand-all="true"
          v-model:checked-keys="checkedKeys"
          @check="handleCheck"
        />
      </TabPane>
    </Tabs>
  </PermissionModal>
</template>
