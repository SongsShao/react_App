/* eslint-disable react/no-unused-state */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp'
import COMPONENT_MAP from './componentMap'
import { isUrl } from '../utils/util'

import { AllRouterList } from './routerList'

const originParentPath = ''
let routerConfig = {}
class RouterList extends React.Component {
    state={
      listRouter: AllRouterList
    }

    divisionRouterList = menuList => {
      let routerConfig = {}
      menuList.forEach(item => {
        if (item.type === 'view' && item.component) {
          this.viewHandler('', item.path, item.component, routerConfig)
        } else if (item.type === 'menu' && item.children.length > 0 && !item.component) {
          this.menuHandler(item, routerConfig)
        }
      })
      return routerConfig
    }

    viewHandler = (oripath = '', path, component, routerConfig) => {
      console.log('path', path, component, COMPONENT_MAP)
      routerConfig[oripath + path] = {
        component: COMPONENT_MAP[`${component}`]
      }
    }

    menuHandler = (a, routerConfig) => {
      a.children.forEach(b => {
        if (b.type === 'view' && b.component) {
          this.viewHandler(a.path, b.path, b.component, routerConfig)
        } else if (b.type === 'menu' && b.children.length > 0 && !b.component) {
          let { path, ...rest } = b
          this.menuHandler({
            path: a.path + path,
            ...rest
          }, routerConfig)
        }
      })
    }

    getRouterList = (data, parentPath = originParentPath) => {
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
          result.children = this.getRouterList(item.children, parentPath + item.path)
        }

        return result
      })
    }

    getFlatMenuData = data => {
      let keys = {}
      data.forEach(item => {
        keys[item.path] = { ...item }
        if (item.children) {
          keys = { ...keys, ...this.getFlatMenuData(item.children) }
        }
      })
      return keys
    }

    getRouter = v => {
      const { listRouter } = this.state
      const routerData = {}
      const menuData = this.getFlatMenuData(this.getRouterList(listRouter))
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
        }
        routerData[path] = router
      })
      return routerData
    }
    render() {
      const { listRouter } = this.state
      const { component: Component, ...rest } = this.props

      routerConfig = this.divisionRouterList(listRouter)
      return (
        <>
          <Route render={props => { return <Component {...props} routerData={this.getRouter()} {...rest} /> }} />
        </>
      )
    }
}

export default RouterList
