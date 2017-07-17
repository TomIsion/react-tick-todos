import React from 'react'

import { date2Chinese } from './utils/time'

const arrStylesOfSvg = [
  { fill: '#ff3180' },
  { fill: '#ffc817' },
  { fill: '#617fde' },
  { fill: 'rgba(0, 0, 0, 0.24)' },
]

const TodoItem = props => {
  return <li
    draggable="true"
  >
    <div className="react-icon move-icon">
      <svg
        viewBox="-2 -1 12 12"
        width="100%"
        height="100%"
      >
        <path d="M0 7h8v1H0zM0 1h8v1H0zM0 4h8v1H0z"></path>
      </svg>
    </div>
    <div className="react-icon state-icon">
      {
        <svg
          viewBox="3 -3 14 14"
          width="100%"
          height="100%"
          style={ arrStylesOfSvg[props.priorityLevel === -1 ? 3 : props.priorityLevel] }
        >
          <path d="M4 9.5c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-11c0-.3-.2-.5-.5-.5h-11c-.3 0-.5.2-.5.5v11zM4.5-3h11c.8 0 1.5.7 1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-11C3.7 11 3 10.3 3 9.5v-11C3-2.3 3.7-3 4.5-3z"></path>
          { ~props.type && <path d="M8 6h6v1H8zM6 3h1v1H6zM6 6h1v1H6zM6 0h8v1H6zM8 3h6v1H8z"></path> }
        </svg>
      }
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