import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Panel from '../Panel/Panel'

import './TextPanel.css'

class TextPanel extends Component {
  state = {
    singleShow: false,
    chosenIndex: -1,
    text: this.props.defaultText,
  }

  handleTitleClick() {
    this.setState({
      singleShow: !this.state.singleShow,
    })
  }

  handleItemClick(event, index) {
    this.setState({
      chosenIndex: index,
      text: event.target.innerText,
      singleShow: false,
    })
  }

  render() {
    const {
      className,
      children,
    } = this.props

    const {
      singleShow: isShow,
      chosenIndex,
      text,
    } = this.state

    return (
      <div
        className={ `${className} text-panel` }
      >
        <div
          className={`title${~chosenIndex ? ' chosen' : ''}`}
          onClick={ () => this.handleTitleClick() }
        >
          { text }
        </div>
        <Panel
          isShow={ isShow }
          className="text-panel-inner"
          chosenIndex={ chosenIndex }
          handleClick={ (event, index) => this.handleItemClick(event, index) }
        >
          { children }
        </Panel>
      </div>
    )
  }
}

TextPanel.propTypes = {
  className: PropTypes.string,
  defaultText: PropTypes.string,
}

export default TextPanel