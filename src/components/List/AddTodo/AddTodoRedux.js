const initialState = {
  arrTodos: [{
    id: 1,
    summarize: '这是一条测试数据',
    priorityLevel: -1,
    endTime: '2017-7-15',
  }]
}

const ADD_COMMON_TODO = 'ADD_COMMON_TODO'

export const createNewTodo = payload => ({
  type: ADD_COMMON_TODO,
  payload,
})

const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMON_TODO:
      const arrTodos = JSON.parse(JSON.stringify(state)).arrTodos
      arrTodos.push({
        id: (arrTodos[arrTodos.length - 1] ? arrTodos[arrTodos.length - 1].id : 0)  + 1,
        ...action.payload,
      })

      return {
        ...state,
        arrTodos,
      }
    default:
      return state
  }
}

export default addTodoReducer