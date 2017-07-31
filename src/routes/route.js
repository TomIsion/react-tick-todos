import React from 'react'
import {
  Route
} from 'react-router-dom'

import AsyncComponent from './AsyncComponent'

// import ListPage from '../views/ListPage/ListPage'
// import DetailPage from '../views/DetailPage/DetailPage'

const App = () => <div>
  <Route
    path="/"
    exact
    component={AsyncComponent(() => import('../views/ListPage/ListPage'))}
  />
  <Route
    path="/detail/:id"
    component={AsyncComponent(() => import('../views/DetailPage/DetailPage'))}
  />
</div>

export default App