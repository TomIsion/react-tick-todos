const CHANGE_TODO_ORDER = 'CHANGE_TODO_ORDER'

export const changeTodoOrder = (changeId, referenceId) => ({
  type: CHANGE_TODO_ORDER,
  payload: {
    changeId,
    referenceId,
  },
})

export default (state, action) => {
  switch (action.type) {
    case CHANGE_TODO_ORDER:
      const arrTodos = JSON.parse(JSON.stringify(state)).arrTodos
      const {
        changeId,
        referenceId,
      } = action.payload
      const objChange = arrTodos.splice(arrTodos.findIndex(item => item.id == changeId), 1)[0]
      arrTodos.splice(arrTodos.findIndex(item => item.id == referenceId) + 1, 0, objChange)

      return {
        ...state,
        arrTodos,
      }
    default: 
      return state
  }
}
