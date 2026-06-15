import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:book-open-text',
      order: 9999,
      title: $t('abp.systemManage'),
    },
    name: 'AbpProject',
    path: '/system',
    children: [
      {
        name: 'userManage',
        path: '/system/users',
        component: () => import('#/views/system/user/index.vue'),
        meta: {
          icon: 'lucide:user',
          title: $t('abp.userManage'),
          authority: ['AbpIdentity.Users'],
        },
      },
      {
        name: 'roleManage',
        path: '/system/roles',
        component: () => import('#/views/system/role/index.vue'),
        meta: {
          icon: 'carbon:user-role',
          title: $t('abp.roleManage'),
          authority: ['AbpIdentity.Roles'],
        },
      },
      {
        name: 'tenantManage',
        path: '/system/tenant',
        component: () => import('#/views/system/tenant/index.vue'),
        meta: {
          icon: 'lucide:users',
          title: $t('abp.tenantManage'),
          authority: ['AbpTenantManagement.Tenants'],
        },
      },
      {
        name: 'dataDictionaryManage',
        path: '/system/data-dictionaries',
        component: () => import('#/views/system/data_dictionary/index.vue'),
        meta: {
          icon: 'material-symbols:dictionary',
          title: $t('abp.dataDictionaryManage'),
          authority: ['DataDictionary.DataDictionaries'],
        },
      },
    ],
  },
];

export default routes;
