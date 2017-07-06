import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from 'redux'

import rootReducer from './reducers'

import {
  routerReducer,
} from 'react-router-redux'

const reducer = combineReducers({
  ...rootReducer,
  router: routerReducer,
})

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}

