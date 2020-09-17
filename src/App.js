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
import Test from './page/test/index'
import My from './page/my/index'

class App extends React.Component {
  state = { selectedTab: 'Home', height: 0 }
  componentDidMount() {
    this.setState({
      height: document.documentElement.clientHeight - 46
    })
  }

  renderContent = v => {
    return <div>{v}</div>
  }

  render() {
    const { headerData, selectedTab, height } = this.state
    const { history } = this.props
    window.baseHistory = history

    const icon = val => (
      <Icon style={{ width: '22px', height: '22px' }}
        type={val}
      />
    )
    return (
      <div className='App'>
        <SHeader header={selectedTab} />
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
              icon={icon('home')}
              selectedIcon={icon('home')}
              selected={this.state.selectedTab === 'Home'}
              badge={0}
              onPress={() => {
                this.setState({
                  selectedTab: 'Home',
                })
              }}
              data-seed='logId'
            >
              <div>
                <Main />
              </div>
            </TabBar.Item>
            <TabBar.Item
              icon={icon('github')}
              selectedIcon={icon('github')}
              title='Github'
              key='Github'
              badge={0}
              selected={this.state.selectedTab === 'Github'}
              onPress={() => {
                this.setState({
                  selectedTab: 'Github',
                })
              }}
              data-seed='logId1'
            >
              <div>
                <Blog />

              </div>
            </TabBar.Item>
            <TabBar.Item
              icon={icon('team')}
              selectedIcon={icon('team')}
              title='Friend'
              key='Friend'
              dot
              selected={this.state.selectedTab === 'Friend'}
              onPress={() => {
                this.setState({
                  selectedTab: 'Friend',
                })
              }}
            >
              <div>
                暂未开发

              </div>
            </TabBar.Item>
            <TabBar.Item
              icon={icon('user')}
              selectedIcon={icon('user')}
              title='My'
              key='My'
              selected={this.state.selectedTab === 'My'}
              onPress={() => {
                this.setState({
                  selectedTab: 'My',
                })
              }}
            >
              <div>
                <My />
              </div>
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

export default App
