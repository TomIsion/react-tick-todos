import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ListTodos.css'

import TodoItem from './TodoItem'

class ListTodos extends Component {
  render() {
    return (
      <ul className="list-todos">
        {
          this.props.arrTodos.map((item, index) =>
            <TodoItem
              key={`${index}-${item.id}`}
              { ...item }
            />
          )
        }
      </ul>
    )
  }
}

ListTodos.propTypes = {
  arrTodos: PropTypes.array,
}

export default ListTodos