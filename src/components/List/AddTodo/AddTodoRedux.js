const ADD_COMMON_TODO = 'ADD_COMMON_TODO'

export const createNewTodo = payload => ({
  type: ADD_COMMON_TODO,
  payload,
})

const addTodoReducer = (state, action) => {
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