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
          icon: 'lucide:copyright',
          title: $t('abp.userManage'),
          authority: ['AbpIdentity.Users'],
        },
      },
      {
        name: 'roleManage',
        path: '/system/roles',
        component: () => import('#/views/system/role/index.vue'),
        meta: {
          icon: 'lucide:book-open-text',
          title: $t('abp.roleManage'),
          authority: ['AbpIdentity.Roles'],
        },
      },
      {
        name: 'dataDictionaryManage',
        path: '/system/data-dictionaries',
        component: () => import('#/views/system/data_dictionary/index.vue'),
        meta: {
          icon: 'lucide:book-open-text',
          title: $t('abp.dataDictionaryManage'),
          authority: ['DataDictionary.DataDictionaries'],
        },
      },
    ],
  },
];

export default routes;
