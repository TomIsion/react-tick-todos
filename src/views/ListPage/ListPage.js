import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createNewTodo, changeShowFinished, changeSortType, changeTodoOrder, jumpToDetail } from './ListPageRedux'

import './ListPage.css'

import Navigation from '../../components/List/Navigation/Navigation'
import AddTodo from '../../components/List/AddTodo/AddTodo'
import ListTodos from '../../components/List/ListTodos/ListTodos'
import Calendar from '../../components/Common/Calendar/Calendar'
import TextPanel from '../../components/Common/TextPanel/TextPanel'

class ListPage extends Component {
  render() {
    const {
      list,      
      createNewTodo,
      changeShowFinished,
      changeSortType,
      changeTodoOrder,
      jumpToDetail,
    } = this.props

    return (
      <div>
        <header>
          <Navigation
            {...list}
            changeShowFinished={ changeShowFinished }
            changeSortType={ changeSortType }
          />
          <AddTodo
            createNewTodo={ createNewTodo }
          />
        </header>
        <main>
          <ListTodos
            {...list}
            changeTodoOrder={ changeTodoOrder }
            handleClick={ jumpToDetail }
          />
        </main>
      </div>
    )
  }
}

ListPage.propTypes = {
  header: PropTypes.object,
  nav: PropTypes.object,
  createNewTodo: PropTypes.func,
  changeShowFinished: PropTypes.func,
  changeSortType: PropTypes.func,
  changeTodoOrder: PropTypes.func,
  jumpToDetail: PropTypes.func,
}

// export default ListPage
export default connect(state => ({
  list: state.list,
}), dispatch => ({
  createNewTodo: bindActionCreators(createNewTodo, dispatch),
  changeShowFinished: bindActionCreators(changeShowFinished, dispatch),
  changeSortType: bindActionCreators(changeSortType, dispatch),
  changeTodoOrder: bindActionCreators(changeTodoOrder, dispatch),
  jumpToDetail: bindActionCreators(jumpToDetail, dispatch),
}))(ListPage)