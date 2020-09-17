import React from 'react'
import { Icon, Grid, Tabs, Modal } from 'antd-mobile'
import { createFromIconfontCN } from '@ant-design/icons'
import NavBarHeader from '../../component/NavBarHeader/index'
import ComponentUI from './componentUI'
import { AllRouterList } from '../../common/routerList'
import { getRouter } from '../../common/routerCompponent'
import './index.css'

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
})
class Index extends React.Component {
  state = { visible: false, name: null, routerData: {}}
  componentDidMount() {
    this.zetState('routerData', getRouter())
  }
  onClick = v => {
    this.setState({
      visible: !this.state.visible
    })
  }

  zetState = (index, val) => {
    this.setState({
      [index]: val
    })
  }

  btnOnclick = v => {
    console.log(v)
    if (v.path) {
      this.setState({
        name: v.text,
        path: v.path
      })
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
        key: value.path + val.path,
        path: value.path + val.path
      }))
      console.log('data', data)
      return <Grid data={data} className='not-square-grid' hasLine={false} onClick={this.btnOnclick} />
    }
  }

  render() {
    const { visible, name, routerData, path } = this.state
    let menu = this.listMenu(AllRouterList)
    console.log('menu', menu)

    return (
      <>
        {menu}
        {
          visible && (
            <Modal
              visible={visible}
            >
              <div>

                <NavBarHeader title={name} onClick={this.onClick} />
                <ComponentUI data={routerData[path]} />
              </div>
            </Modal>
          )
        }

      </>
    )
  }
}

export default Index
