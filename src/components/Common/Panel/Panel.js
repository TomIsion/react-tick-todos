import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CSSTransitionGroup } from 'react-transition-group'

class Panel extends Component {
  render() {
    const {
      children,
      handleClick,
      transitionName,
      transitionEnterTimeout,
      transitionLeaveTimeout,
      chosenIndex,
      className,
      isShow,
    } = this.props

    return (
      <CSSTransitionGroup
        transitionName={transitionName}
        transitionEnterTimeout={transitionEnterTimeout}
        transitionLeaveTimeout={transitionLeaveTimeout}
      >
      {
        isShow &&
        <div key={0} className={ className }>
          {
            React.Children.map(children, (item, index) =>
              React.cloneElement(item, {
                onClick: () => handleClick(item, index),
                className: index === chosenIndex ? 'chosen' : '',
              }, item.props.children)
            )
          }
        </div>
      }
      </CSSTransitionGroup>
    )
  }
}

Panel.propTypes = {
  chosenIndex: PropTypes.number,
  transitionName: PropTypes.string,
  transitionEnterTimeout: PropTypes.number,
  transitionLeaveTimeout: PropTypes.number,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  isShow: PropTypes.bool,
}

export default Panel