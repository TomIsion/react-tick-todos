import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Detail/Header/Header'

import {
  changeTodoStatus,
  changeTodoDate,
  changeTodoPriority,
} from './DetailPageRedux'

class DetailPage extends Component {
  render() {
    const objHeaderProps = (() => {
      const beforeProps = Object.assign({}, this.props)
      delete beforeProps.obj
      return Object.assign({}, beforeProps, { ...this.props.obj })
    })()

    return (
      <div>
        <Header
          { ...objHeaderProps }
        ></Header>
      </div>
    )
  }
}

DetailPage.propTypes = {
  obj: PropTypes.object,
  changeTodoStatus: PropTypes.func,
  changeTodoDate: PropTypes.func,
  changeTodoPriority: PropTypes.func,
}

export default connect((state, ownProps) => ({
  obj: state.list.arrTodos.find(item => item.id === parseInt(ownProps.match.params.id))
}), dispatch => ({
  changeTodoStatus: bindActionCreators(changeTodoStatus, dispatch),
  changeTodoDate: bindActionCreators(changeTodoDate, dispatch),
  changeTodoPriority: bindActionCreators(changeTodoPriority, dispatch),
}))(DetailPage)