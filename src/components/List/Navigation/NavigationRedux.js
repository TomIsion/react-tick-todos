// 是否呈现已完成
const CHANGE_SHOW_FINISHED = 'CHANGE_SHOW_FINISHED'

// 修改排序值
const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE'

// 排序值键值对
// const sortName2Value = {
//   'list': 0,
//   'time': 1,
//   'title': 2,
//   'priorityLevel': 3,
// }

export const changeShowFinished = () => ({
  type: CHANGE_SHOW_FINISHED,
})

export const changeSortType = payload => ({
  type: CHANGE_SORT_TYPE,
  payload,
})

export default (state, action) => {
  switch (action.type) {
    case CHANGE_SHOW_FINISHED:
      return {
        ...state,
        singleShowFinished: !state.singleShowFinished,
      }
    case CHANGE_SORT_TYPE:
      return {
        ...state,
        singleSortType: action.payload,
      }
    default:
      return state
  }
}