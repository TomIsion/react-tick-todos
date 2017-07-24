import headerPartReducer, { createNewTodo } from '../../components/List/AddTodo/AddTodoRedux'
import navPartReducer, { changeShowFinished, changeSortType } from '../../components/List/Navigation/NavigationRedux'
import listPartReducer, { changeTodoOrder } from '../../components/List/ListTodos/ListTodosRedux'

const initialState = {
  singleShowFinished: true,
  singleSortType: 1,
  arrTodos: [{
    id: 1,
    summarize: '这是第一条测试数据',
    priorityLevel: -1,
    endTime: '2017-7-15',
    percent: 0.5,
  }, {
    id: 2,
    summarize: '这是第二条测试数据',
    priorityLevel: 2,
    endTime: '2017-7-18',
  }, {
    id: 3,
    summarize: '这是第三条测试数据',
    priorityLevel: 1,
    endTime: '2017-7-18',
  }],
}

export default (state = initialState, action) => {
  let _state = headerPartReducer(state, action)
  _state = navPartReducer(_state, action)
  _state = listPartReducer(_state, action)

  return _state
}

export { createNewTodo, changeShowFinished, changeSortType, changeTodoOrder }