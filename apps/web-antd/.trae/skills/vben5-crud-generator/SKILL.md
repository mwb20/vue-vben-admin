---
name: vben5-crud-generator
description: Generates standard CRUD pages for vue-vben-admin 5.x projects using VbenModal, VxeGrid, and form components. Invoke when user asks to create a new management page or generate CRUD code.
---

# Vue Vben Admin 5.x CRUD Generator

This skill generates standard CRUD management page code for the vue-vben-admin 5.x framework.

## Project Structure

All CRUD pages follow this structure:
```
src/views/{module}/{entity}/
├── index.vue    # List page with grid and modal
├── edit.vue     # Edit/Create form modal
└── schema.ts    # Form and table configurations
```

## Localization

All UI text MUST use the `$t` function from `@vben/locales` to support internationalization.

### Import
```typescript
import { $t } from '@vben/locales';
```

### Common Localization Keys

From `src/locales/langs/zh-CN/abp.json` and `en-US/abp.json`:

| Key | Chinese | English |
|-----|---------|---------|
| abp.search | 搜索 | Search |
| abp.query | 查询 | Query |
| abp.add | 新增 | Add |
| abp.edit | 编辑 | Edit |
| abp.delete | 删除 | Delete |
| abp.save | 保存 | Save |
| abp.action | 操作 | Action |
| abp.pleaseInput | 请输入 | Please enter |
| abp.pleaseSelect | 请选择 | Please select |
| abp.confirmDelete | 确认删除 | Confirm delete |
| abp.yes | 是 | Yes |
| abp.no | 否 | No |
| abp.enabled | 启用 | Enabled |
| abp.disabled | 禁用 | Disabled |
| abp.tenantName | 租户名称 | Tenant name |
| abp.inputTenantName | 请输入租户名称 | Please enter tenant name |
| abp.adminEmailAddress | 管理员邮箱 | Admin email |
| abp.inputAdminEmailAddress | 请输入管理员邮箱 | Please enter admin email |
| abp.adminPassword | 管理员密码 | Admin password |
| abp.inputAdminPassword | 请输入管理员密码 | Please enter admin password |
| abp.confirmPassword | 确认密码 | Confirm password |
| abp.inputConfirmPassword | 请输入确认密码 | Please enter confirm password |
| abp.confirmPasswordNotMatch | 两次输入密码不一致 | Passwords do not match |

## Code Pattern Analysis

### 1. schema.ts Pattern

```typescript
import type { VxeTableGridOptions } from '@vben/plugins/vxe-table';
import type { DeepPartial } from '@vben/types';
import type { VbenFormProps } from '#/adapter/form';
import { $t } from '@vben/locales';
import { z } from '#/adapter/form';
import { requestClient } from '#/api/request';

// Row Type Interface
interface RowType {
  id: string;
  // ... other fields based on API
}

// Search Form Configuration
export const SearchFormOptions: VbenFormProps = {
  collapsed: false,
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: $t('abp.pleaseInput') + '...',
      },
      defaultValue: '',
      fieldName: 'filter',
      label: $t('abp.search'),
    },
  ],
  showCollapseButton: false,
  submitButtonOptions: {
    content: $t('abp.query'),
  },
  submitOnChange: false,
  submitOnEnter: true,
  compact: false,
  wrapperClass: 'grid-cols-2 md:grid-cols-2',
};

// Main Grid Configuration
export const MainGridOptions: DeepPartial<VxeTableGridOptions<RowType>> = {
  checkboxConfig: { highlight: true },
  border: true,
  columns: [
    { field: 'id', type: 'checkbox', width: 50 },
    { field: 'fieldName', title: $t('abp.xxx'), minWidth: 120, sortable: true },
    // Boolean status column with slot (e.g., isActive, hasChildren)
    {
      field: 'isActive',
      title: $t('abp.enabled'),
      minWidth: 80,
      slots: { default: 'status-slot' },
    },
    // Action column
    {
      cellRender: { name: 'CellLink', props: { text: $t('abp.edit') } },
      field: 'action',
      fixed: 'right',
      title: $t('abp.action'),
      width: 150,
      slots: { default: 'action' },
    },
  ],
  height: 'auto',
  keepSource: true,
  sortConfig: { trigger: 'cell', remote: true },
  toolbarConfig: { refresh: true, print: true, zoom: true, custom: true },
  pagerConfig: {},
  proxyConfig: {
    sort: true,
    response: { result: 'items', total: 'totalCount' },
    ajax: {
      query: async (params: any, formValues: any[]) => {
        const { sort, page } = params;
        return requestClient.get('/api/{entity}', {
          params: {
            filter: formValues.filter,
            sorting: sort.order ? `${sort.field} ${sort.order}` : undefined,
            skipCount: (page.currentPage - 1) * page.pageSize,
            maxResultCount: page.pageSize,
          },
        });
      },
      delete: async () => { return new Promise((resolve) => { resolve([]); }); },
    },
  },
};

// Edit Form Configuration
export const EditFormOptions: VbenFormProps = {
  commonConfig: { labelWidth: 100 },
  showDefaultActions: false,
  layout: 'horizontal',
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: $t('abp.pleaseInput') + '...',
      },
      fieldName: 'fieldName',
      label: $t('abp.xxx'),
      rules: z.string().min(1, { message: $t('abp.pleaseInput') + '...' }),
    },
    {
      component: 'Switch',
      defaultValue: true,
      fieldName: 'isActive',
      label: $t('abp.isEnable'),
    },
    // Hidden fields for edit mode
    {
      component: 'Input',
      fieldName: 'id',
      dependencies: { triggerFields: ['id'], if() { return false; } },
    },
  ],
  wrapperClass: 'grid-cols-1',
};
```

### 2. index.vue Pattern

```vue
<script lang="ts" setup>
import { Page, useVbenModal } from '@vben/common-ui';
import { $t } from '@vben/locales';
import { Button, Space, Tag } from 'ant-design-vue';
import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { deleteEntity } from '#/api/abp-client';
import { onAdd, onDel, onEdit } from '#/utils/common-methods';
import EditFormModal from './edit.vue';
import { MainGridOptions, SearchFormOptions } from './schema';

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions: SearchFormOptions,
  gridOptions: MainGridOptions,
  separator: true,
});

const [EditModal, EditModalApi] = useVbenModal({
  connectedComponent: EditFormModal,
});
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <Space align="center">
          <Button
            type="primary"
            v-access:code="'{Module}.{Entity}.Create'"
            @click="onAdd(EditModalApi)"
          >
            {{ $t('abp.add') }}
          </Button>
        </Space>
      </template>

      <!--
        Status slot example - field name and display text vary by entity:
        - isActive: 启用/禁用
        - hasChildren: 是/否
        Adjust field name, colors, and text as needed
      -->
      <template #status-slot="{ row }">
        <Tag v-if="row.isActive" color="green">{{ $t('abp.enabled') }}</Tag>
        <Tag v-else color="orange">{{ $t('abp.disabled') }}</Tag>

        <!-- Alternative: Yes/No format -->
        <!-- <Tag v-if="row.hasChildren" color="blue">{{ $t('abp.yes') }}</Tag> -->
        <!-- <Tag v-else color="default">{{ $t('abp.no') }}</Tag> -->
      </template>

      <template #action="{ row }">
        <Space>
          <Button
            size="small"
            type="primary"
            v-access:code="'{Module}.{Entity}.Update'"
            @click="onEdit(EditModalApi, { id: row.id })"
          >
            {{ $t('abp.edit') }}
          </Button>
          <Button
            size="small"
            type="primary"
            v-access:code="'{Module}.{Entity}.Delete'"
            @click="onDel(gridApi, row, deleteEntity)"
          >
            {{ $t('abp.delete') }}
          </Button>
        </Space>
      </template>
    </Grid>
    <EditModal @reload="gridApi.reload" />
  </Page>
</template>
```

### 3. edit.vue Pattern

```vue
<script lang="ts" setup>
import type { CreateDto, UpdateDto } from '#/api/abp-client/index';
import { ref } from 'vue';
import { useVbenModal } from '@vben/common-ui';
import { useVbenForm } from '#/adapter/form';
import { createEntity, getEntity, updateEntity } from '#/api/abp-client/index';
import { onAddConfirm, onEditConfirm } from '#/utils/common-methods';
import { EditFormOptions } from './schema';

const emitReload = defineEmits(['reload']);
const isAdd = ref(true);

const [EditModal, modalApi] = useVbenModal({
  onOpenChange(isOpen: boolean) {
    if (isOpen) {
      const value = modalApi.getData<Record<string, string>>();
      if (!value.id) { return; }
      isAdd.value = false;
      getEntity({ id: value.id }).then((res) => {
        editFormApi.setValues(res);
      });
    }
  },
  onConfirm: async () => {
    if (isAdd.value) {
      await onAddConfirm(editFormApi, modalApi, createEntity, emitReload,
        (data: CreateDto) => data);
      return;
    }
    await onEditConfirm(editFormApi, modalApi, updateEntity, emitReload,
      (data: UpdateDto) => data);
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
```

## Common Utility Functions

Located in `src/utils/common-methods.ts`:

- `onAdd(modalApi)` - Open add modal with title from `$t('abp.add')`
- `onEdit(modalApi, row)` - Open edit modal with title from `$t('abp.edit')`
- `onDel(gridApi, row, deleteApi)` - Show confirm dialog, call delete API, reload grid
- `onAddConfirm(formApi, modalApi, createApi, emit, transform)` - Handle add form submission
- `onEditConfirm(formApi, modalApi, updateApi, emit, transform)` - Handle edit form submission

## Permission Code Pattern

- 查询: `{Module}.{Entity}s` or `{Module}.{Entity}s.Query`
- 新增: `{Module}.{Entity}s.Create`
- 编辑: `{Module}.{Entity}s.Update`
- 删除: `{Module}.{Entity}s.Delete`

## Form Component Types

Available components (must be registered in `#/adapter/form`):
- `Input` - Text input
- `InputPassword` - Password input
- `InputNumber` - Number input
- `InputTextArea` / `Textarea` - Text area
- `Select` - Dropdown select
- `Switch` - Toggle switch
- `Checkbox` / `CheckboxGroup` - Checkbox
- `Radio` / `RadioGroup` - Radio buttons
- `DatePicker` - Date picker
- `TimePicker` - Time picker
- `Upload` - File upload

## Common API Patterns

### List API (with pagination)
```typescript
requestClient.get('/api/{entity}', {
  params: { filter, sorting, skipCount, maxResultCount }
})
// Response: { items: [], totalCount: number }
```

### Get Single
```typescript
requestClient.get('/api/{entity}/{id}')
```

### Create
```typescript
requestClient.post('/api/{entity}', data)
```

### Update
```typescript
requestClient.put('/api/{entity}', data, { params: { id } })
```

### Delete
```typescript
requestClient.delete('/api/{entity}', { params: { id } })
```

## Tree Table Configuration (if needed)

```typescript
treeConfig: {
  parentField: 'parentId',      // Parent ID field
  lazy: true,                   // Lazy loading
  hasChildField: 'hasChildren', // Has children flag
  showIcon: true,
  indent: 20,
  loadMethod: (params: { row: RowType }): Promise<any[]> => {
    return requestClient.get('/api/{entity}/Children', {
      params: { parentId: params.row.id }
    });
  }
},
columns: [
  {
    field: 'name',
    title: $t('abp.xxx'),  // Use $t for localization
    treeNode: true,  // Important: mark as tree node column
    // ...
  },
  // ...
]
```

## Form Field Dependencies

```typescript
{
  component: 'Input',
  fieldName: 'fieldName',
  label: $t('abp.xxx'),
  dependencies: {
    triggerFields: ['otherField'],
    if(values) {
      // Return true to hide this field
      return !values.otherField;
    },
    disabled(values) {
      return !values.otherField;
    },
    required(values) {
      return !!values.otherField;
    },
  },
}
```

## Usage

When generating a CRUD page:

1. First analyze the API types from `src/api/abp-client/types.ts`
2. Create `RowType` interface based on API DTO
3. Import `$t` from `@vben/locales`
4. Create `SearchFormOptions` with localized labels and placeholders
5. Create `MainGridOptions` with localized column titles
6. Create `EditFormOptions` with localized field labels and validation messages
7. Create `index.vue` with localized button text and slot content
8. Create `edit.vue` with form and modal logic
9. Use `v-access:code` for permission control
10. Use slots for custom column rendering (tags, badges, etc.)

## Key Files Reference

- User management: `src/views/system/user/`
- Role management: `src/views/system/role/`
- Localization zh-CN: `src/locales/langs/zh-CN/abp.json`
- Localization en-US: `src/locales/langs/en-US/abp.json`
- API types: `src/api/abp-client/types.ts`
- API client: `src/api/abp-client/index.ts`
- Common methods: `src/utils/common-methods.ts`
- Table adapter: `src/adapter/vxe-table.ts`
- Form adapter: `src/adapter/form.ts`
