/*
 * @Date: 2019-08-05 15:07:31
 * @LastEditTime: 2019-11-18 16:04:31
 * @Description: file content
 */
import { createBrowserHistory } from 'history'

const history = createBrowserHistory({ forceRefresh: true })

/**
 * 路由跳转
 * @params path 跳转路径
 * @params name 跳转页面名称
 * @params state 传参
 */
history.jump = ({ path, name = '未命名页面', state = {}, isRef = false }) => {
  console.log(path, state)
  history.push(`${path}`, state)
}

export { history }
