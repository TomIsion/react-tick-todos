import ListPageReducer from '../views/ListPage/ListPageRedux'
import DetailPageReducer from '../views/DetailPage/DetailPageRedux'

const initialState = {
  singleShowFinished: true,
  singleSortType: 1,
  arrTodos: [{
    id: 1,
    summarize: '这是第一条测试数据',
    priorityLevel: 0,
    endTime: '2017-7-15',
    percent: 0.5,
    status: 0,
    type: 0,
  }, {
    id: 2,
    summarize: '这是第二条测试数据',
    priorityLevel: 2,
    endTime: '2017-7-18',
    type: -1,
    status: 0,
  }, {
    id: 3,
    summarize: '这是第三条测试数据',
    priorityLevel: 1,
    endTime: '2017-7-18',
    status: 0,
  }],
}

export default {
  list: (state = initialState, action) => {
    let _state = ListPageReducer(state, action)
    _state = DetailPageReducer(_state, action)

    return _state
  },
}