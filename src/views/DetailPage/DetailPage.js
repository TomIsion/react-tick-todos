import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Detail/Header/Header'

class DetailPage extends Component {
  render() {
    return (
      <div>
        <Header
          {...this.props.obj}
        ></Header>
      </div>
    )
  }
}

DetailPage.propTypes = {
  obj: PropTypes.object,
}

export default connect((state, ownProps) => ({
  obj: state.list.arrTodos.find(item => item.id === parseInt(ownProps.match.params.id))
}), dispatch => ({

}))(DetailPage)