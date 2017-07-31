import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

import {
  routerReducer,
} from 'react-router-redux'

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
      applyMiddleware(saveMiddleWare),
    ),
  )

  return store
}
