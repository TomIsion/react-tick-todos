import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'
import {
  ConnectedRouter,
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import './sass/reset.css'

import App from './routes/route'

const store = configureStore()
const history = createHistory()

ReactDOM.render(
  <Provider store = { store }>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
