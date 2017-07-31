import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CalendarTextPanel.css'

import Calendar from '../../Common/Calendar/Calendar'
import Panel from '../../Common/Panel/Panel'

import {
	date2Chinese,
	date2Single,
} from '../../../utils/time'

class CaldenarTextPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: this.props.date,
      isShow: false,
    }

    this.handleGlobalClick = this.handleGlobalClick.bind(this)
  }

  handleChangeCalendar(date) {
    this.setState({
      date,
      isShow: false,
    })

    this.props.handleChangeCalendar && this.props.handleChangeCalendar({
      id: this.props.id,
      endDate: date,
    })
  }

  handleTitleClick() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  handleGlobalClick(e) {
    if (!this.domCalendarTextPanel.contains(e.target)) {
      this.setState({
        isShow: false,
      })
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleGlobalClick)
  }

  componentWillUnMount() {
    document.body.removeEventListener('click', this.handleGlobalClick)
  }

  render() {
		const {
			date,
			isShow,
		} = this.state

		const {
			className,
		} = this.props

    return (
      <div
        className={ `calendar-text-panel ${className ? className : ''} ${ date2Single(date) === 1 ? 'after' : date2Single(date) === -1 ? 'overtime' : '' }` }
        ref={ ref => this.domCalendarTextPanel = ref }
      >
        <div
          className="title"
          onClick={ () => this.handleTitleClick() }
        >
          <div className="icon-container">
            <svg
              width="100%" height="100%"
              viewBox="0 -7 24 24"
            >
              <path d="M19-2h-2v-2h-1v2H8v-2H7v2H5c-.6 0-1 .5-1 1v12.5c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V-1c0-.6-.4-1-1-1zm0 13.5c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5V-1h14v12.5z"></path>            
              {
                !date && <path d="M7 1h1v1H7zM7 4h1v1H7zM16 1h1v1h-1zM16 4h1v1h-1zM10 1h1v1h-1zM10 4h1v1h-1zM13 1h1v1h-1zM13 4h1v1h-1zM7 7h1v1H7zM10 7h1v1h-1zM13 7h1v1h-1z"></path>
              }
            </svg>
            <span>{ date ? new Date(date).getDate() : '' }</span>
          </div>
          <div className="plus-info">
						{
							date ? 
							date2Chinese(date) :
							'设置日期'
						}
          </div>
        </div>
        <Panel
          className="calendar-wrapper"
          isShow={ isShow }
        >
          <Calendar
            handleClick={ date => this.handleChangeCalendar(date) }
            date={ date }
          />
        </Panel>
      </div>
    )
  }
}

CaldenarTextPanel.propTypes = {
  id: PropTypes.number,
  handleChangeCalendar: PropTypes.func,
  date: PropTypes.string,
  className: PropTypes.string,
}

export default CaldenarTextPanel