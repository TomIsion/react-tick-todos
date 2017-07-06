import React from 'react'

const TodoItem = props => {
  return <li>
    <div className="react-icon move-icon">
    </div>
    <div className="react-icon state-icon">
    </div>
    <a href="">
      <p>{ props.summarize }</p>
      <div className="finish-status"></div>
      <div className="time"></div>
    </a>
    <div className="react-icon more-icon">
    </div>
  </li>
}

export default TodoItem