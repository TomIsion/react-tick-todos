import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AddTodo.css'

import Panel from '../../Common/Panel/Panel'
import PriorityPanel from '../../Common/PriorityPanel/PriorityPanel'
import CalendarPanel from '../../Common/CalendarPanel/CalendarPanel'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      strTodo: '',
      singleHighLight: false,
    }

    this.plusInfo = {
      priorityLevel: -1,
      endTime: null,
    }

    this.changeSingleHighLight = this.changeSingleHighLight.bind(this)
  }

  changeSingleHighLight(e) {
    if (this.addTodo.contains(e.target)) {
      this.setState({
        singleHighLight: true,
      })
    } else {
      this.setState({
        singleHighLight: false,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.singleHighLight !== this.state.singleHighLight && this.state.singleHighLight === true) {
      this.domInput.focus()
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.changeSingleHighLight)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.changeSingleHighLight)
  }

  handleKeyPress(e) {
    if (e.charCode == 13) {
      const value = e.target.value.trim()
      this.props.createNewTodo({
        summarize: value,
        ...this.plusInfo,
      })

      this.plusInfo = {
        priorityLevel: -1,
        endTime: null,
      }
    }
  }
  
  render() {
    const {
      strTodo,
      singleHighLight,
    } = this.state

    return (
      <div
        className="add-todo-container"
        style={
          singleHighLight ? {
            borderColor: '#617fde'
          } : {}
        }
        ref={ ref => this.addTodo = ref }
      >
        <div
          className={
            singleHighLight ? 'add-todo-plus-container' : 'add-todo-plus-container none'
          }
        >
          <div className="calender-container">
            <CalendarPanel 
              handleChangeCalendar={ newDate => this.plusInfo.newDate }
            />
          </div>
          <div className="priority-container">
            <PriorityPanel
              handleChangePriority={ newLevel => this.plusInfo.priorityLevel = newLevel }
            />
          </div>
          <div className="archive-container">
            <svg width="24px" height="24px" viewBox="0 -7 24 24">
              <path d="M12.7 7.6l.7.7 2.5-2.5c.2-.2.2-.5 0-.7l-2.5-2.5-.7.7L14.4 5H8v1h6.3l-1.6 1.6z"></path>
              <path d="M19 0H5c-.6 0-1 .4-1 1v9.5c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V1c0-.5-.4-1-1-1zm0 10.5c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5V1h14v9.5zM6-4h12v1H6zM5-2h14v1H5z"></path>
            </svg>
          </div>
        </div>
        <input
          type="text"
          placeholder={ `添加任务至"收集箱"` }
          value={ strTodo }
          ref={ ref => this.domInput = ref }
          onChange={
            e => this.setState({ strTodo: e.target.value })
          }
          onKeyPress={
            e => this.handleKeyPress(e)
          }
        />
      </div>
    )
  }
}

AddTodo.propTypes = {

}

export default AddTodo