import React from 'react'
import {
  Route
} from 'react-router-dom'

import ListPage from '../views/ListPage/ListPage'

const App = () => <div>
  <Route
    path="/"
    component={ListPage}
  />
</div>

export default App