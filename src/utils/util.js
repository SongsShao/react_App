/* eslint-disable no-undef */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g

export function isUrl(path) {
  return reg.test(path)
}

export function getRoutes(path, routerData) {
  // console.log('routerData', routerData)
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  )
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''))
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes)
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1)
    // console.log('路由跳转item', item)
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`
    }
  })
  return renderRoutes
}

function getRenderArr(routes) {
  let renderArr = []
  renderArr.push(routes[0])
  for (let i = 1; i < routes.length; i += 1) {
    let isAdd = false
    // 是否包含
    isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3)
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1)
    if (isAdd) {
      renderArr.push(routes[i])
    }
  }
  return renderArr
}

function getRelation(str1, str2) {
  if (str1 === str2) {
      console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/')
  const arr2 = str2.split('/')
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1
  }
  if (arr1.every((item, index) => item === arr2[index])) {
    return 2
  }
  return 3
}

export function getStatusBarHeight() {
  // let immersed = 0
  // let ms = (/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent)
  // if (ms && ms.length >= 3) { // 当前环境为沉浸式状态栏模式
  //   immersed = parseFloat(ms[2])// 获取状态栏的高度
  // }
  // return immersed

  window.mui.plusReady(() => {
    // 判断是否支持沉浸式
    let isImmersedStatusbar = plus.navigator.isImmersedStatusbar()
    console.log(isImmersedStatusbar)
    // 获取系统状态栏高度
    let StatusbarHeight = plus.navigator.getStatusbarHeight()
    console.log(StatusbarHeight)
  })
}
