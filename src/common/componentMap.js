import asyncComponent from './asyncComponent'

const COMPONENT_MAP = {
  '/blog/index': asyncComponent(() => import('../page/blog/index'), 150),
  '/main/index': asyncComponent(() => import('../page/main/index'), 150),
  '/test/index': asyncComponent(() => import('../page/test/index'), 150),
  '/question/indexMx': asyncComponent(() => import('../page/question/indexMx'), 150)
}

export default COMPONENT_MAP
