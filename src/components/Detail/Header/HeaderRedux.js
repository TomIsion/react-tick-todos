const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS'
const CHANGE_TODO_DATE = 'CHANGE_TODO_DATE'
const CHANGE_TODO_PRIORITY = 'CHANGE_TODO_PRIORITY'
const CHANGE_TODO_FINISH_PERCENT = 'CHANGE_TODO_FINISH_PERCENT'

export const changeTodoStatus = payload => ({
  type: CHANGE_TODO_STATUS,
  payload,
})

export const changeTodoDate = payload => ({
  type: CHANGE_TODO_DATE,
  payload,
})

export const changeTodoPriority = payload => ({
  type: CHANGE_TODO_PRIORITY,
  payload,
})

export const changeTodoFinishPercent = payload => ({
  type: CHANGE_TODO_FINISH_PERCENT,
  payload,
})

const changeTodoHeaderReducer = (state, action) => {
  let arrTodos = JSON.parse(JSON.stringify(state)).arrTodos

  let indexOfTodo = -1
  let itemTodo = undefined

  switch (action.type) {
    case CHANGE_TODO_STATUS:
      indexOfTodo = state.arrTodos.findIndex(item => item.id === action.payload.id)
      itemTodo = state.arrTodos.find(item => item.id === action.payload.id)
      itemTodo.status = action.payload.status
      arrTodos.splice(indexOfTodo, 1, itemTodo)
      return {
        ...state,
        arrTodos,
      }
    case CHANGE_TODO_DATE:
      indexOfTodo = state.arrTodos.findIndex(item => item.id === action.payload.id)
      itemTodo = state.arrTodos.find(item => item.id === action.payload.id)
      itemTodo.endTime = action.payload.endTime
      arrTodos.splice(indexOfTodo, 1, itemTodo)
      return {
        ...state,
        arrTodos,
      }
    case CHANGE_TODO_PRIORITY:
      indexOfTodo = state.arrTodos.findIndex(item => item.id === action.payload.id)
      itemTodo = state.arrTodos.find(item => item.id === action.payload.id)
      itemTodo.priorityLevel = action.payload.priorityLevel
      arrTodos.splice(indexOfTodo, 1, itemTodo)
      return {
        ...state,
        arrTodos,
      }
    case CHANGE_TODO_FINISH_PERCENT:
      indexOfTodo = state.arrTodos.findIndex(item => item.id === action.payload.id)
      itemTodo = state.arrTodos.find(item => item.id === action.payload.id)
      itemTodo.percent = action.payload.percent
      arrTodos.splice(indexOfTodo, 1, itemTodo)
      return {
        ...state,
        arrTodos,
      }
    default:
      return state
  }
}

export default changeTodoHeaderReducer
