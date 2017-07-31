import ListPageReducer from '../views/ListPage/ListPageRedux'
import DetailPageReducer from '../views/DetailPage/DetailPageRedux'

const initialState = window.localStorage.getItem('tickCache') ?
  JSON.parse(decodeURIComponent(window.localStorage.getItem('tickCache'))) :
  {
    singleShowFinished: true,
    singleSortType: 1,
    arrTodos: [],
  }

export default {
  list: (state = initialState, action) => {
    let _state = ListPageReducer(state, action)
    _state = DetailPageReducer(_state, action)

    return _state
  },
}