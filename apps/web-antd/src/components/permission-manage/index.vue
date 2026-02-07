<script lang="ts" setup>
import type { DataNode, EventDataNode } from 'ant-design-vue/es/tree';

import type {
  PermissionGrantInfoDto,
  PermissionGroupDto,
  ProviderInfoDto,
  UpdatePermissionsDto,
} from '#/api/abp-client';

import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import {
  Checkbox,
  Divider,
  message,
  TabPane,
  Tabs,
  Tag,
  Tree,
} from 'ant-design-vue';

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
// 全选复选框状态，存储每个权限组的全选状态
const selectAllStates = ref<
  Record<string, { checked: boolean; indeterminate: boolean }>
>({});

const permissionsParams = ref<{
  providerKey: string;
  providerName: string;
}>({
  providerName: '',
  providerKey: '',
});
const hasUserPermission = ref<boolean>(false);

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
    // 检查是否为用户权限
    hasUserPermission.value = permissionsParams.value.providerName === 'U';

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

      // 初始化全选状态
      permissionGroups.value.forEach((group) => {
        updateSelectAllState(group.name || '');
      });
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

  // 更新所有权限组的全选状态
  permissionGroups.value.forEach((group) => {
    updateSelectAllState(group.name || '');
  });
}

/**
 * 获取当前权限组下所有可用的权限（排除禁用的权限）
 * @param groupName 权限组名称
 * @returns 可用权限列表
 */
function getAvailablePermissions(groupName: string): PermissionGrantInfoDto[] {
  const group = permissionGroups.value.find((g) => g.name === groupName);
  if (!group) return [];

  return (group.permissions || []).filter((permission) => {
    // 如果是用户权限，排除角色权限
    if (hasUserPermission.value) {
      return !permission.grantedProviders?.some((x) => x.providerName === 'R');
    }
    return true;
  });
}

/**
 * 更新全选复选框状态
 * @param groupName 权限组名称
 */
function updateSelectAllState(groupName: string) {
  const availablePermissions = getAvailablePermissions(groupName);
  const availablePermissionKeys = availablePermissions.map((p) => p.name || '');

  // 获取当前选中的可用权限
  const checkedAvailablePermissions = checkedKeys.value.checked.filter((key) =>
    availablePermissionKeys.includes(key),
  );

  // 计算选中状态
  const checkedCount = checkedAvailablePermissions.length;
  const totalCount = availablePermissionKeys.length;

  if (totalCount === 0) {
    selectAllStates.value[groupName] = { checked: false, indeterminate: false };
    return;
  }

  if (checkedCount === 0) {
    // 没有选中任何权限
    selectAllStates.value[groupName] = { checked: false, indeterminate: false };
  } else if (checkedCount === totalCount) {
    // 全部权限都选中了
    selectAllStates.value[groupName] = { checked: true, indeterminate: false };
  } else {
    // 部分权限选中
    selectAllStates.value[groupName] = { checked: false, indeterminate: true };
  }
}

/**
 * 处理全选复选框点击事件
 * @param groupName 权限组名称
 * @param checked 选中状态
 */
function handleSelectAll(groupName: string, checked: boolean) {
  const availablePermissions = getAvailablePermissions(groupName);
  const availablePermissionKeys = availablePermissions.map((p) => p.name || '');

  // 检查是否所有权限都被禁用
  if (availablePermissionKeys.length === 0) {
    message.info(
      '当前分组所有权限都继承自角色权限，若要取消请通过角色设置或联系管理员',
    );
    return;
  }

  if (checked) {
    // 全选：添加所有可用权限
    const newCheckedKeys = [...checkedKeys.value.checked];
    availablePermissionKeys.forEach((key) => {
      if (!newCheckedKeys.includes(key)) {
        newCheckedKeys.push(key);
      }
    });
    checkedKeys.value.checked = newCheckedKeys;
  } else {
    // 取消全选：移除所有可用权限
    checkedKeys.value.checked = checkedKeys.value.checked.filter(
      (key) => !availablePermissionKeys.includes(key),
    );
  }

  // 更新全选状态
  updateSelectAllState(groupName);
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
    disableCheckbox:
      hasUserPermission.value &&
      node.grantedProviders?.some((x) => x.providerName === 'R'), // 禁用角色权限的复选框
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
        <!-- 使用选择框勾选时全选当前分组下所有权限，取消时取消当前分组下所有权限 -->
        <Checkbox
          size="small"
          :checked="selectAllStates[item.name || '']?.checked || false"
          :indeterminate="
            selectAllStates[item.name || '']?.indeterminate || false
          "
          @change="(e) => handleSelectAll(item.name || '', e.target.checked)"
        >
          全选
        </Checkbox>
        <Divider style="margin: 12px 0" />
        <!-- 以树形展示分组下的权限 -->
        <Tree
          :tree-data="getTreeData(item.permissions || [], null)"
          checkable
          :check-strictly="true"
          :default-expand-all="true"
          v-model:checked-keys="checkedKeys"
          @check="handleCheck"
        >
          <template #title="{ title, dataRef }">
            <span> {{ title }} </span>
            <Tag
              v-if="
                hasUserPermission &&
                dataRef.grantedProviders?.some(
                  (x: ProviderInfoDto) => x.providerName === 'R',
                )
              "
              color="purple"
            >
              角色：{{
                dataRef.grantedProviders
                  ?.filter((x: ProviderInfoDto) => x.providerName === 'R')
                  ?.map((x: ProviderInfoDto) => x.providerKey)
                  .join('')
              }}
            </Tag>
          </template>
        </Tree>
      </TabPane>
    </Tabs>
  </PermissionModal>
</template>
