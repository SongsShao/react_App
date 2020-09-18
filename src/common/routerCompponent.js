import pathToRegexp from 'path-to-regexp'
import { AllRouterList } from './routerList'
import COMPONENT_MAP from './componentMap'
import { isUrl } from '../utils/util'

const originParentPath = ''
let routerConfig = {}
function divisionRouterList(menuList) {
  let routerConfig = {}
  menuList.forEach(item => {
    if (item.type === 'view' && item.component) {
      viewHandler('', item, routerConfig)
    } else if (item.type === 'menu' && item.children.length > 0 && !item.component) {
      menuHandler(item, routerConfig)
    }
  })
  return routerConfig
}

function viewHandler(oripath = '', item, routerConfig) {
  console.log('path', item, COMPONENT_MAP)
  routerConfig[oripath + item.path] = {
    component: COMPONENT_MAP[`${item.component}`],
    url: item.url
  }
}

function menuHandler(a, routerConfig) {
  a.children.forEach(b => {
    if (b.type === 'view' && b.component) {
      viewHandler(a.path, b, routerConfig)
    } else if (b.type === 'menu' && b.children.length > 0 && !b.component) {
      let { path, ...rest } = b
      menuHandler({
        path: a.path + path,
        ...rest
      }, routerConfig)
    }
  })
}

function getRouterList(data, parentPath = originParentPath) {
  return data.map(item => {
    let { path } = item
    if (!isUrl(path)) {
      path = parentPath + path
    }
    const result = {
      ...item,
      path
    }

    if (item.children) {
      result.children = getRouterList(item.children, parentPath + item.path)
    }

    return result
  })
}

function getFlatMenuData (data) {
  let keys = {}
  data.forEach(item => {
    keys[item.path] = { ...item }
    if (item.children) {
      keys = { ...keys, ...getFlatMenuData(item.children) }
    }
  })
  return keys
}

export function getRouter (v) {
  routerConfig = divisionRouterList(AllRouterList)
  const routerData = {}
  const menuData = getFlatMenuData(getRouterList(AllRouterList))
  console.log('memuData', menuData, routerConfig)
  Object.keys(routerConfig).forEach(path => {
    const pathRegexp = pathToRegexp(path)
    // 转正则,有参数的url也不会有影响匹配
    const menuKey = Object.keys(menuData).filter(key => pathRegexp.test(`${key}`))
    let menuItem = {}
    if (menuKey) {
      menuItem = menuData[menuKey]
    }
    let router = routerConfig[path]
    router = {
      ...router,
      name: router.name || menuItem.name,
      url: menuItem.url
    }
    routerData[path] = router
  })
  console.log('routerData', routerData)
  return routerData
}
