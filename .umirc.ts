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
      component: '@/layouts/TabLayout',
      name: 'Layout',
      icon: 'smile',
      flatMenu: true,
      routes: [
        {
          name: 'Home',
          icon: 'smile',
          path: '/home',
          component: '@/pages/home',
        },
        {
          name: 'About',
          icon: 'smile',
          path: '/about',
          component: '@/pages/about',
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
