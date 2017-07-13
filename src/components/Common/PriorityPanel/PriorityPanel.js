import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Panel from '../Panel/Panel'

import arrSvgs from './svgSettings'

import './PriorityPanel.css'

const arrStylesOfSvg = [
  { fill: '#ff3180' },
  { fill: '#ffc817' },
  { fill: '#617fde' },
  { fill: 'rgba(0, 0, 0, 0.34)' },
]

class PriorityPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShow: false,
      style: {},
      chosenIndex: -1,
    }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleGlobalClick = this.handleGlobalClick.bind(this)
  }

  handleTitleClick() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  handleItemClick(component, index) {
    this.setState({
      chosenIndex: index,
      style: arrStylesOfSvg[index],
      isShow: false,
    })

    this.props.handleChangePriority(index === 3 ? -1 : index)
  }

  handleGlobalClick(e) {
    if (!this.domPriorityPanel.contains(e.target)) {
      this.setState({
        isShow: false,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.resetSingle !== nextProps.resetSingle) {
      this.setState({
        style: {},
        chosenIndex: -1,
      })
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleGlobalClick)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleGlobalClick)
  }

  render() {
    const {
      isShow,
      style,
      chosenIndex,
    } = this.state

    const svgIndex = chosenIndex === 3 ? 0 : chosenIndex === -1 ? 0 : chosenIndex

    return (
      <div
        className="priority-panel"
        ref={ ref => this.domPriorityPanel = ref }
      >
        {
          React.cloneElement(arrSvgs[svgIndex], {
            onClick: () => this.handleTitleClick(),
            style,
          }, arrSvgs[svgIndex].props.children)
        }
        <Panel
          className="priority-wrapper"
          isShow={ isShow }
          transitionName="priority-wrapper"
          transitionEnterTimeout={ 100 }
          transitionLeaveTimeout={ 100 }
          handleClick={ this.handleItemClick }
          chosenIndex={ chosenIndex }
        >
          <div className="priority-high">
            <div>{ arrSvgs[0] }</div>
            <span>高优先级</span>
          </div>
          <div className="priority-middle">
            <div>{ arrSvgs[1] }</div>
            <span>中优先级</span>
          </div>
          <div className="priority-low">
            <div>{ arrSvgs[2] }</div>
            <span>低优先级</span>
          </div>
          <div className="priority-none">
            <div>{ arrSvgs[0] }</div>
            <span>无优先级</span>
          </div>
        </Panel>
      </div>
    )
  }
}

PriorityPanel.propTypes = {
  handleChangePriority: PropTypes.func,
  resetSingle: PropTypes.number,
}

export default PriorityPanel
