import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FinishPercentScale from '../FinishPercentScale/FinishPercentScale'
import FinishedCheckBox from '../FinishedCheckbox/FinishedCheckbox'
import CalendarTextPanel from '../CalendarTextPanel/CalendarTextPanel'
import PriorityPanel from '../../Common/PriorityPanel/PriorityPanel'

import './Header.css'

class Header extends Component {
  render() {
    const {
      id,
      summarize,
      endTime,
      status,
      type,
      percent,
      priorityLevel,
      changeTodoStatus,
      changeTodoDate,
      changeTodoPriority,
      changeTodoFinishPercent,
    } = this.props

    return (
      <header>
        <FinishPercentScale
          id={ id }
          percent={ percent }
          handlePercentChange={ changeTodoFinishPercent }
        />
        <div className="icon-back">
          <svg
            viewBox="-389 291 20 20"
            width="100%"
            height="100%"
          >
            <path d="M-384.7 300.8h15.7v1.5h-15.7l6.2 6.2-1.1 1.1-8-8 8-8 1.1 1.1-6.2 6.1z"></path>
          </svg>
        </div>
        <FinishedCheckBox
          id={ id }
          status={ status }
          type={ type }
          handleClick={ changeTodoStatus }
        />
        <CalendarTextPanel
          id={ id }
          date={ endTime }
          handleChangeCalendar={ changeTodoDate }
        />
        <PriorityPanel
          id={ id }
          priorityLevel={ priorityLevel }
          handleChangePriority={ changeTodoPriority }
        />
      </header>
    )
  }
}

Header.propTypes = {
  id: PropTypes.number,
  summarize: PropTypes.string,
  endTime: PropTypes.string,
  status: PropTypes.number,
  type: PropTypes.number,
  percent: PropTypes.number,
  priorityLevel: PropTypes.number,
}

export default Header