import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './FinishedCheckbox.css'

const arrSvgsCheckbox = [
  <svg
    viewBox="4 -4 16 16"
    width="100%"
    height="100%"
  >
    <path d="M19 10.5c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-13c0-.3.2-.5.5-.5H14v-1H5.5C4.7-4 4-3.3 4-2.5v13c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V2h-1v8.5z"></path>
    <path d="M8.9 2.7l-.8.6 3 4c.2.3.6.3.8 0l7.5-10-.8-.6-7.1 9.5-2.6-3.5z"></path>
  </svg>,
  <svg
    viewBox="4 -4 16 16"
    width="100%"
    height="100%"
  >
    <path d="M18.5-4h-13C4.7-4 4-3.3 4-2.5v13c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5zm.5 14.5c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-13c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v13z"></path>
    <path d="M7 3h1v1H7zM7 6h1v1H7zM9 3h8v1H9zM7 0h10v1H7zM9 6h8v1H9z"></path>
  </svg>,
  <svg
    viewBox="4 -4 16 16"
    width="100%"
    height="100%"
  >
    <path d="M5 10.5c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5h-13c-.3 0-.5.2-.5.5v13zM5.5-4h13c.8 0 1.5.7 1.5 1.5v13c0 .8-.7 1.5-1.5 1.5h-13c-.8 0-1.5-.7-1.5-1.5v-13C4-3.3 4.7-4 5.5-4z"></path>
  </svg>,
]

class FinishedCheckbox extends Component {
  state = {
    status: this.props.status,
  }

  handleClick(event) {
    this.setState({
      status: this.state.status === 0 ? 1 : 0,
    })

    this.props.handleClick && this.props.handleClick({
      id: this.props.id,
      status: this.state.status === 0 ? 1 : 0,
    })
  }
  
  render() {
    const status = this.state.status
    const type = this.props.type

    return (
      <div
        className="icon-checkbox"
        onClick={ e => this.handleClick(e) }
      >
        {
          arrSvgsCheckbox[status === 1 ? 0 : type === 0 ? 1 : 2]
        }
      </div>
    )
  }
}

FinishedCheckbox.propTypes = {
  id: PropTypes.number,
  status: PropTypes.number,
  type: PropTypes.number,
  handleClick: PropTypes.func,
}

export default FinishedCheckbox