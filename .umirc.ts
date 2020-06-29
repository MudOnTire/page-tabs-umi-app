import { defineConfig } from 'umi';

const RouteWatcher = '@/components/PageTab/RouteWatcher';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
    siderWidth: 208,
  },
  routes: [
    {
      path: '/',
      component: '@/components/PageTab/TabLayout',
      flatMenu: true,
      routes: [
        {
          name: 'Home',
          icon: 'smile',
          path: '/home',
          component: '@/pages/home',
          wrappers: [RouteWatcher],
        },
        {
          name: 'About',
          icon: 'smile',
          path: '/about',
          component: '@/pages/about',
          wrappers: [RouteWatcher],
        },
        {
          name: 'Contact',
          icon: 'smile',
          path: '/contact',
          component: '@/pages/contact',
          wrappers: [RouteWatcher],
        },
        {
          exact: true,
          path: '/',
          redirect: '/home',
        },
      ],
    },
  ],
});
