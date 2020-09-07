export const AllRouterList = [
  {
    icon: 'ie',
    name: '主页',
    type: 'menu',
    path: '/songs',
    children: [
      {
        type: 'view',
        path: '/main',
        name: '主页',
        component: '/main/index'
      },
      {
        type: 'view',
        name: '博客',
        path: '/blog',
        component: '/blog/index'
      },
      {
        type: 'view',
        name: '测试',
        path: '/test',
        component: '/test/index'
      }
    ]
  }

]
