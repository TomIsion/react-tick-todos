import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './FinishPercentScale.css'

class FinishPercentScale extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percent: this.props.percent,
    }

    this.handlePercentChange = this.handlePercentChange.bind(this)
  }

  handlePercentChange(index) {
    this.setState({
      percent: index / 10,
    })

    this.props.handlePercentChange({
      id: this.props.id,
      percent: index / 10,
    })
  }

  render() {
    const percent = this.state.percent

    return (
      <div className="finish-percent-container">
        <div
          className="finished-chunk"
          style={{
            transform: `scaleX(${percent})`
          }}
        ></div>
        <ul className="scale-container">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
            <li
              key={ index }
              onClick={ () => this.handlePercentChange(index) }
            >
              <div className="line"></div>
              <span>{ index * 10 }%</span>
            </li>
          )  
        }
        </ul>
      </div>
    )
  }
}

FinishPercentScale.propTypes = {
  id: PropTypes.number,
  percent: PropTypes.number,
  handlePercentChange: PropTypes.func,
}

export default FinishPercentScale