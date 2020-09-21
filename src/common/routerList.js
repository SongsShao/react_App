export const AllRouterList = [
  {
    icon: 'icon-android',
    name: '主页',
    type: 'menu',
    path: '/songs',
    children: [
      {
        icon: 'icon-android',
        type: 'view',
        path: '/main',
        name: '主页',
        component: '/main/index'
      },
      {
        icon: 'icon-github',
        type: 'view',
        name: 'Github',
        path: '/Github',
        url: 'https://songsshao.github.io/',
        component: '/main/index'
      },
      {
        icon: 'icon-github',
        type: 'view',
        name: 'gui-jun.Github',
        path: '/gui-jun.Github',
        url: 'https://gui-jun.github.io/',
        component: '/main/index'
      },
      {
        icon: 'icon-csdn',
        type: 'view',
        name: 'songshao',
        path: '/songshao',
        url: 'https://blog.csdn.net/qq_35490191',
        component: '/main/index'
      }
    ]
  },
  {
    icon: 'icon-RectangleCopy16',
    name: '工具',
    type: 'menu',
    path: '/songs',
    children: [
      {
        icon: 'icon-fenbianshuai',
        type: 'view',
        name: '分辨率工具',
        path: '/test',
        component: '/test/index'
      }
    ]
  },
  {
    icon: 'icon-RectangleCopy16',
    name: '测试按钮',
    type: 'menu',
    path: '/test',
    children: [
      {
        type: 'view',
        name: '问题明细页面',
        path: '/questionMx',
        component: '/question/indexMx'
      }
    ]
  }

]
