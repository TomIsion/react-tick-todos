import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CalendarTextPanel from '../CalendarTextPanel/CalendarTextPanel'
import FinishedCheckBox from '../FinishedCheckbox/FinishedCheckbox'

import './Header.css'

class Header extends Component {
  render() {
    const {
      summarize,
      endTime,
      status,
      type,
      percent,
      priorityLevel,
    } = this.props

    return (
      <header>
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
          status = { status }
          type = { type }
        />
        <CalendarTextPanel
          
        />
        <div className="priority-container"></div>
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