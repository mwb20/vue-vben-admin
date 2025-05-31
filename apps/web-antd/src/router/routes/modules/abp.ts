import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      badgeType: 'dot',
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
        name: 'abptest2',
        path: '/system/test2',
        component: IFrameView,
        meta: {
          icon: 'lucide:book-open-text',
          link: 'https://www.baidu.com',
          title: $t('abp.test2'),
        },
      },
    ],
  },
];

export default routes;
