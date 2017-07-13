import React from 'react'

import { date2Chinese } from './utils/time'

const TodoItem = props => {
  return <li>
    <div className="react-icon move-icon">
    </div>
    <div className="react-icon state-icon">
    </div>
    <div className="info-line">
      {
        date2Chinese(props.endTime)
      }
      <div className="finish-status"></div>
      <p>{ props.summarize }</p>      
    </div>
    <div className="react-icon more-icon">
    </div>
  </li>
}

export default TodoItem