export const AllRouterList = [
  {
    icon: 'android',
    name: '主页',
    type: 'menu',
    path: '/songs',
    children: [
      {
        icon: 'android',
        type: 'view',
        path: '/main',
        name: '主页',
        component: '/main/index'
      },
      {
        icon: 'github',
        type: 'view',
        name: 'Github',
        path: '/Github',
        url: 'https://songsshao.github.io/',
        component: '/main/index'
      },
      {
        icon: 'github',
        type: 'view',
        name: 'gui-jun.Github',
        path: '/gui-jun.Github',
        url: 'https://gui-jun.github.io/',
        component: '/main/index'
      }
    ]
  },
  {
    icon: 'setting',
    name: '工具',
    type: 'menu',
    path: '/songs',
    children: [
      {
        icon: 'tool',
        type: 'view',
        name: '分辨率工具',
        path: '/test',
        component: '/test/index'
      }
    ]
  }

]
