import React from 'react'

const TodoItem = props => {
  return <li>
    <div className="react-icon move-icon">
    </div>
    <div className="react-icon state-icon">
    </div>
    <div className="info-line">
      <p>{ props.summarize }</p>
      <div className="finish-status"></div>
      <div className="time"></div>
    </div>
    <div className="react-icon more-icon">
    </div>
  </li>
}

export default TodoItem