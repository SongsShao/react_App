import React, { useState, useEffect } from 'react'
import './App.css'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { SHeader } from './component/index'
import RouterList from './common/router'
import MainLayout from './layouts/MainLayout'

class App extends React.Component {
  state = {}
  render() {
    const { history } = this.props
    window.baseHistory = history
    return (
      <div className='App'>

        {/* <p>{count}</p>
        <div onClick={() => { setCount(count + 1) }}>点击</div> */}
        <SHeader />
        <Router history={history}>
          <Switch>
            <RouterList path='/'
              {...this.props}
              history={history}
              component={MainLayout}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
