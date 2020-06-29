import { defineConfig } from 'umi';

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
          wrappers: ['@/components/PageTab/RouteWatcher'],
        },
        {
          name: 'About',
          icon: 'smile',
          path: '/about',
          component: '@/pages/about',
          wrappers: ['@/components/PageTab/RouteWatcher'],
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
