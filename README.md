# 配置路由

```
routes: [
  {
    path: '/',
    component: '@/layouts/TabLayout',
    flatMenu: true, // 在菜单中隐藏TabLayout，并将自路由提升一级
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
]
```

