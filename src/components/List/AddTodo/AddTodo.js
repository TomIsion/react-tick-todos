import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AddTodo.css'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      strTodo: '',
      singleHighLight: false,
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
      })
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
            <svg width="24px" height="24px" viewBox="0 -7 24 24">
              <path d="M19-2h-2v-2h-1v2H8v-2H7v2H5c-.6 0-1 .5-1 1v12.5c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V-1c0-.6-.4-1-1-1zm0 13.5c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5V-1h14v12.5z"></path>
              <path d="M7 1h1v1H7zM7 4h1v1H7zM16 1h1v1h-1zM16 4h1v1h-1zM10 1h1v1h-1zM10 4h1v1h-1zM13 1h1v1h-1zM13 4h1v1h-1zM7 7h1v1H7zM10 7h1v1h-1zM13 7h1v1h-1z"></path>
            </svg>
            <div className="calender-panel"></div>
          </div>
          <div className="priority-container">
            <svg width="24px" height="24px" viewBox="-4 -8 24 24">
              <circle cx="3" cy="10" r="1"></circle>
              <circle cx="8" cy="10" r="1"></circle>
              <path d="M3-3c-.6 0-1 .4-1 1v8c0 .5.4 1 1 1s1-.4 1-1v-8c0-.5-.4-1-1-1zM13-3c-.6 0-1 .4-1 1v8c0 .5.4 1 1 1s1-.4 1-1v-8c0-.5-.4-1-1-1z"></path>
              <circle cx="13" cy="10" r="1"></circle>
              <path d="M8-3c-.6 0-1 .4-1 1v8c0 .5.4 1 1 1s1-.4 1-1v-8c0-.5-.4-1-1-1z"></path>
            </svg>
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