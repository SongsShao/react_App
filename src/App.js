import React from 'react'
import { Tabs, TabBar } from 'antd-mobile'
import { Icon } from 'antd'
import './App.css'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { SHeader } from './component/index'
import RouterList from './common/router'
import MainLayout from './layouts/MainLayout'
import Main from './page/main/index'
import Blog from './page/blog/index'
import Question from './page/question/index'
import My from './page/my/index'
import { getRouter } from './common/routerCompponent'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: window.iconurl
})

class App extends React.Component {
  state = { selectedTab: 'Home', height: 0, right: '' }
  componentDidMount() {
    this.zetState('height', document.documentElement.clientHeight - 46)
    window.routerData = getRouter()
  }

  zetState = (index, val) => {
    console.log(index, val)
    this.setState({
      [index]: val
    })
  }

  renderContent = v => {
    return <div>{v}</div>
  }

  render() {
    const { selectedTab, height, right } = this.state
    const { history } = this.props
    window.baseHistory = history

    const icon = val => (
      <IconFont style={{ width: '22px', height: '22px', paddingTop: '4px', fontSize: '16px' }}
        type={val}
      />
    )

    return (
      <div className='App'>
        <SHeader header={selectedTab} right={right} />
        <div style={{ height }}>

          {/* <Router history={history}>
              <Switch>
                <RouterList path='/'
                  {...this.props}
                  history={history}
                  component={MainLayout}
                />
              </Switch>
            </Router> */}

          <TabBar
            unselectedTintColor='#949494'
            tintColor='#33A3F4'
            barTintColor='white'
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title='Home'
              key='Home'
              icon={icon('icon-home4-copy')}
              selectedIcon={icon('icon-home4')}
              selected={this.state.selectedTab === 'Home'}
              badge={0}
              onPress={() => {
                this.setState({
                  selectedTab: 'Home',
                  right: ''
                })
              }}
              data-seed='logId'
            >
              <div>
                <Main right={data => this.zetState('right', '')} />
              </div>
            </TabBar.Item>
            <TabBar.Item
              icon={icon('icon-github1-copy')}
              selectedIcon={icon('icon-github1')}
              title='Github'
              key='Github'
              badge={0}
              selected={this.state.selectedTab === 'Github'}
              onPress={() => {
                this.setState({
                  selectedTab: 'Github',
                  right: ''
                })
              }}
              data-seed='logId1'
            >
              <div>
                <Blog right={data => this.zetState('right', '')} />

              </div>
            </TabBar.Item>
            <TabBar.Item
              icon={icon('icon-question-copy')}
              selectedIcon={icon('icon-question')}
              title='Question'
              key='Question'
              badge={0}
              selected={this.state.selectedTab === 'Question'}
              onPress={() => {
                this.setState({
                  selectedTab: 'Question',
                  right: ''
                })
              }}
            >
              <div>
                <Question right={data => this.zetState('right', '')} />
              </div>
            </TabBar.Item>
            <TabBar.Item
              icon={icon('icon-music1')}
              selectedIcon={icon('icon-music1-copy')}
              title='Music'
              key='Music'
              selected={this.state.selectedTab === 'Music'}
              onPress={() => {
                this.setState({
                  selectedTab: 'Music',
                  right: this.state.rightData
                })
              }}
            >
              <div>
                <My right={data => {
                  this.zetState('right', data)
                  this.setState({
                    rightData: data
                  })
                }}
                />
              </div>
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

export default App
