import React from 'react'
import { Grid, Tabs, Modal } from 'antd-mobile'
import { Icon } from 'antd'
import ComponentUI from '../../component/songs/componentUI'
import { AllRouterList } from '../../common/routerList'
import './index.css'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: window.iconurl
})

class Index extends React.Component {
  state = { visible: false,
  }
  componentDidMount() {
    this.zetState('routerData', window.routerData)
  }

  onClick = v => {
    // window.baseHistory.jump({
    //   path: v,
    //   state: ''
    // })
    this.setState({
      visible: !this.state.visible
    })
    console.log('visible', this.state.visible)
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
        path: v.path
      })
      this.onClick(v.path)
      // this.onRef.zetState('visible', true)
    }
  }

  listMenu = data => {
    return data.map((item, index) => {
      if (item.type === 'menu') {
        return (
          <>
            <div key={String(index)} className='sub-title'>
              <IconFont type={item.icon ? item.icon : 'icon-android'} style={{ color: '#4A90E2', marginRight: '10px' }} />
              {item.name}
            </div>
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
        icon: <IconFont type={val.icon ? val.icon : 'icon-android'} style={{ color: '#4A90E2', fontSize: '24px' }} />,
        text: val.name,
        key: value.path + val.path,
        path: value.path + val.path
      }))
      console.log('data', data)
      return <Grid data={data} className='not-square-grid' hasLine={false} onClick={this.btnOnclick} />
    }
  }

  render() {
    const { path } = this.state
    let menu = this.listMenu(AllRouterList)
    console.log('menu', menu)

    return (
      <>
        {menu}
        { (window.routerData && window.routerData[path]) && <ComponentUI onCanel={() => { this.setState({ path: null }) }} visible data={window.routerData[path]} /> }
      </>
    )
  }
}

export default Index
