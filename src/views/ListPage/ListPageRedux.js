import headerPartReducer, { createNewTodo } from '../../components/List/AddTodo/AddTodoRedux'
import navPartReducer, { changeShowFinished, changeSortType } from '../../components/List/Navigation/NavigationRedux'
import listPartReducer, { changeTodoOrder } from '../../components/List/ListTodos/ListTodosRedux'

export default (state, action) => {
  let _state = headerPartReducer(state, action)
  _state = navPartReducer(_state, action)
  _state = listPartReducer(_state, action)

  return _state
}

export { createNewTodo, changeShowFinished, changeSortType, changeTodoOrder }