import React, { Component } from 'react'

import { date2DOM } from '../../../utils/time'

const arrStylesOfSvg = [
  { fill: '#ff3180' },
  { fill: '#ffc817' },
  { fill: '#617fde' },
  { fill: 'rgba(0, 0, 0, 0.24)' },
]

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      singleHover: false,
    }

    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleDragStart(event) {
    event.dataTransfer.setData('text', this.props.id)
  }

  handleDrop(event) {
    event.preventDefault()

    if (event.dataTransfer.getData('text') !== this.props.id) {
      // 触发排序
      this.props.changeTodoOrder(event.dataTransfer.getData('text'), this.props.id)
    } else {

    }
  }

  handleDragOver(event) {
    event.preventDefault()
  }

  handleClick(event) {
    // 跳转终页
  }

  componentDidMount() {
    const percent = this.props.percent

    if (this.finishedCanvas) {
      // 渲染完成的饼图
      const context = this.finishedCanvas.getContext('2d')

      context.strokeStyle = '#c3c3c3'
      context.fillStyle = '#e3e3e3'

      context.beginPath()
      context.arc(6, 6, 5, 0, Math.PI * 2, false)
      context.stroke()
      context.closePath()

      context.beginPath()
      context.moveTo(6, 6)
      context.arc(6, 6, 5, - Math.PI / 2, Math.PI * 2 * percent - Math.PI / 2, false)
      context.lineTo(6, 6)
      context.fill()
    }
  }

  render() {
    const props = this.props

    const {
      singleHover,
    } = this.state

    return (
      <li
        draggable="true"
        onDragStart={ this.handleDragStart }
        onDrop={ this.handleDrop }
        onDragOver={ this.handleDragOver }
        className={ singleHover && 'chosen' }
        onClick={ this.handleClick }
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
            date2DOM(props.endTime)
          }
          {
            props.percent &&  <div className="finish-status">
              <canvas width="12" height="12" ref={ ref => this.finishedCanvas = ref }></canvas>
            </div>
          }
          {
            props.type && <div className="icon-text">
              <svg
                viewBox="-2 -4 16 16"
                width="100%"
                height="100%"
              >
                <path d="M9.5-1h-7C1.7-1 1-.3 1 .5v7C1 8.3 1.7 9 2.5 9h7c.8 0 1.5-.7 1.5-1.5v-7C11-.3 10.3-1 9.5-1zm.5 8.5c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"></path>
                <path d="M3 3h6v1H3zM3 5h3v1H3zM3 1h6v1H3z"></path>
              </svg>
            </div>
          }
          <p>{ props.summarize }</p>      
        </div>
        <div className="react-icon more-icon">
        </div>
      </li>
    )
  }
}

export default TodoItem