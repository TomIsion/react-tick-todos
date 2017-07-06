import { combineReducers } from 'redux'

import header, { createNewTodo } from '../../components/List/AddTodo/AddTodoRedux'
import nav, { changeShowFinished, changeSortType } from '../../components/List/Navigation/NavigationRedux'

export default combineReducers({
  header,
  nav,
})

export { createNewTodo, changeShowFinished, changeSortType }