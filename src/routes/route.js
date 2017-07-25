import React from 'react'
import {
  Route
} from 'react-router-dom'

import ListPage from '../views/ListPage/ListPage'
import DetailPage from '../views/DetailPage/DetailPage'

const App = () => <div>
  <Route
    path="/"
    exact
    component={ListPage}
  />
  <Route
    path="/detail/:id"
    component={DetailPage}
  />
</div>

export default App