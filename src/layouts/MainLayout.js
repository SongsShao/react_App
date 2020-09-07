import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import { getRoutes } from '../utils/util'
import Main from '../page/main/index'

class MainLayout extends React.Component {
    state={}

    render() {
      const { match, routerData } = this.props
      let layout = (
        <CacheSwitch>
          {getRoutes(match.path, routerData).map(item => {
            if (item.cache) {
              return (
                <CacheRoute key={item.key}
                  className={item.path}
                  path={item.path}
                  render={
                    props => {
                      return (
                        <item.component {...props}
                          routerData={routerData}
                        >
                        </item.component>
                      )
                    }
                  }
                />
              )
            }
            return (
              <Route key={item.key}
                className={item.path}
                path={item.path}
                render={
                  props => {
                    return (
                      <item.component {...props}
                        routerData={routerData}
                      >
                      </item.component>
                    )
                  }
                }
              />
            )
          })}
        </CacheSwitch>
      )
      let pathOne = window.location.pathname.split('/')[1]
      return (
        <>
          {pathOne === 'songs' ? layout : <Main props={this.props} />}
        </>
      )
    }
}

export default MainLayout
