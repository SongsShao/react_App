import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { history } from './utils/history'
import * as serviceWorker from './serviceWorker'

// document.writeln('<script src="./vconsole.min.js"></script>')

ReactDOM.render(
  <React.StrictMode>
    <App history={history} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
