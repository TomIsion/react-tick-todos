import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createNewTodo, changeShowFinished, changeSortType } from './ListPageRedux'

import './ListPage.css'

import Navigation from '../../components/List/Navigation/Navigation'
import AddTodo from '../../components/List/AddTodo/AddTodo'
import ListTodos from '../../components/List/ListTodos/ListTodos'
import Calendar from '../../components/Common/Calendar/Calendar'

class ListPage extends Component {
  render() {
    const {
      createNewTodo,
      header,
      nav,
      changeShowFinished,
      changeSortType,
    } = this.props

    return (
      <div>
        <header>
          <Navigation
            {
              ...nav
            }
            changeShowFinished={ changeShowFinished }
            changeSortType={ changeSortType }
          />
          <AddTodo
            createNewTodo={ createNewTodo }
          />
        </header>
        <main>
          <ListTodos
            {...header}
          />
          <Calendar
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
}

// export default ListPage
export default connect(state => ({
  header: state.list.header,
  nav: state.list.nav,
}), dispatch => ({
  createNewTodo: bindActionCreators(createNewTodo, dispatch),
  changeShowFinished: bindActionCreators(changeShowFinished, dispatch),
  changeSortType: bindActionCreators(changeSortType, dispatch),
}))(ListPage)