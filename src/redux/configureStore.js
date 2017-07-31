import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from 'redux'

import createHistory from 'history/createBrowserHistory'

import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

import {
  routerReducer,
  routerMiddleware,
} from 'react-router-redux'

export const history = createHistory()

const middles = routerMiddleware(history)

const reducer = combineReducers({
  ...rootReducer,
  router: routerReducer,
})

const saveMiddleWare = store => next => action => {
  const returnValue = next(action)

  window.localStorage.setItem('tickCache', encodeURIComponent(JSON.stringify(store.getState().list)))

  return returnValue
}

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(middles, saveMiddleWare),
    ),
  )

  return store
}