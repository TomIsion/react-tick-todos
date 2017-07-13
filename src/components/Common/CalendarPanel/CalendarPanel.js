import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CalendarPanel.css'

import Calendar from '../Calendar/Calendar'
import Panel from '../Panel/Panel'

class CalendarPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: undefined,
      isShow: false,
    }

    this.handleGlobalClick = this.handleGlobalClick.bind(this)
  }

  handleChangeCalendar(date) {
    this.setState({
      date,
      isShow: false,
    })

    this.props.handleChangeCalendar(date)
  }

  handleTitleClick() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  handleGlobalClick(e) {
    if (!this.domCalendarPanel.contains(e.target)) {
      this.setState({
        isShow: false,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resetSingle !== this.props.resetSingle) {
      this.setState({
        date: undefined,
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
      isShow,
      date,
    } = this.state

    return (
      <div
        className="calendar-panel"
        ref={ ref => this.domCalendarPanel = ref }
      >
        <div
          className={ `title${date ? ' chosen' : ''}` }
          onClick={ () => this.handleTitleClick() }
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
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

CalendarPanel.propTypes = {
  handleChangeCalendar: PropTypes.func,
  resetSingle: PropTypes.number,
}

export default CalendarPanel