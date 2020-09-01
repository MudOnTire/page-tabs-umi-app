import { defineConfig } from 'umi';

const RouteWatcher = '@/components/PageTab/RouteWatcher';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
    baseSeparator: '-',
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
          tabLocalId: 'menu.Home',
          icon: 'smile',
          path: '/home',
          component: '@/pages/home',
          wrappers: [RouteWatcher],
        },
        {
          name: 'About',
          tabLocalId: 'menu.About',
          icon: 'smile',
          path: '/about',
          component: '@/pages/about',
          wrappers: [RouteWatcher],
        },
        {
          name: 'Contact',
          tabLocalId: 'menu.Contact',
          icon: 'smile',
          path: '/contact',
          component: '@/pages/contact',
          wrappers: [RouteWatcher],
        },
        {
          name: 'Posts',
          tabLocalId: 'menu.Posts',
          icon: 'smile',
          path: '/posts',
          component: '@/pages/postList',
          wrappers: [RouteWatcher],
        },
        {
          name: 'PostDetail',
          tabLocalId: 'menu.PostDetail',
          icon: 'smile',
          path: '/posts/:id',
          component: '@/pages/postDetail',
          wrappers: [RouteWatcher],
          menu: false,
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
