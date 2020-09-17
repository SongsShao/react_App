import React from 'react'
import { Icon, Grid, Tabs } from 'antd-mobile'
import { createFromIconfontCN } from '@ant-design/icons'
import { AllRouterList } from '../../common/routerList'
import './index.css'

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
})
class Index extends React.Component {
  state = {}
  onClick = v => {
    window.baseHistory.jump({
      path: v,
      state: ''
    })
  }

  btnOnclick = v => {
    console.log(v)
    if (v.path) {
      this.onClick(v.path)
    }
  }

  listMenu = data => {
    return data.map((item, index) => {
      if (item.type === 'menu') {
        return (
          <>
            <div key={String(index)} className='sub-title'>{item.name}</div>
            {this.grid(item)}
          </>
        )
      }
    })
  }

  grid = value => {
    console.log('item.children', value.children)
    if (value.children) {
      const data = value.children.map(val => ({
        icon: <IconFont type={val.icon === undefined ? 'icon-java' : val.icon} />,
        text: val.name,
        path: value.path + val.path
      }))
      console.log('data', data)
      return <Grid data={data} className='not-square-grid' hasLine={false} onClick={this.btnOnclick} />
    }
  }

  render() {
    let menu = this.listMenu(AllRouterList)
    console.log('menu', menu)
    return (
      <>
        {menu}
      </>
    )
  }
}

export default Index
