import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'

import Panel from '../../Common/Panel/Panel'

import './Navigation.css'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShow: false,
    }

    this.svgRender = [
      <svg
        width="24px"
        height="24px"
        viewBox="3 -7 24 24"
      >
        <path d="M8 10.3L5.9 8.1l-.8.8 3 3c.4.3.9 0 .9-.4V-2.9H8v13.2zM12 9h11v1H12zM12 4h11v1H12zM12-1h11v1H12z"></path>
      </svg>,
      <svg
        width="24px"
        height="24px"
        viewBox="3 -7 24 24"
      >
        <path d="M9 10.3L6.9 8.1l-.8.8 3 3c.3.3.9.1.9-.4V-2.9H9v13.2zM18.5-2C14.9-2 12 .9 12 4.5s2.9 6.5 6.5 6.5S25 8.1 25 4.5 22.1-2 18.5-2zm0 12c-3 0-5.5-2.5-5.5-5.5S15.5-1 18.5-1 24 1.5 24 4.5 21.5 10 18.5 10z"></path>
        <path d="M19 1h-1v3.7c0 .2.1.3.3.3H21V4h-2V1z"></path>
      </svg>,
      <svg
        width="24px"
        height="24px"
        viewBox="3 -7 24 24"
      >
        <path d="M9 10.3L6.9 8.1l-.8.8 3 3c.3.3.9.1.9-.4V-2.9H9v13.2zM23.6 10.2l.9-.4-5.5-11c-.2-.4-.7-.4-.9 0l-5.5 11 .9.4L15.6 6h5.9l2.1 4.2zM16.1 5L18.5.1 20.9 5h-4.8z"></path>
      </svg>,
      <svg
        width="24px"
        height="24px"
        viewBox="3 -7 24 24"
      >
        <path d="M8 10.3L5.9 8.1l-.8.8 3 3c.4.3.9 0 .9-.4V-2.9H8v13.2zM13-2h1v9h-1zM13 9h1v2h-1zM17-2h1v9h-1zM21-2h1v9h-1zM17 9h1v2h-1zM21 9h1v2h-1z"></path>
      </svg>,
    ]

    this.handlePanelClick = this.handlePanelClick.bind(this)
    this.handleClickOuterSortPanel = this.handleClickOuterSortPanel.bind(this)
  }

  handlePanelClick(item, index) {
    this.props.changeSortType(index)

    this.setState({
      isShow: false,
    })
  }

  handleClickOuterSortPanel(e) {
    if (this.domPanel.contains(e.target)) {

    } else {
      this.setState({
        isShow: false,
      })
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickOuterSortPanel)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickOuterSortPanel)    
  }

  render() {
    const {
      singleShowFinished,      
      changeShowFinished,
      singleSortType,
    } = this.props

    return (
      <div className="header-navigation clear">
        <div className="react-icon icon-menu">
          <svg width="16px" height="16px">
            <path
              d="M 0 0 h 16 v 2 H 0 z  M 0 7 h 16 v 2 H 0 z  M 0 14 h 16 v 2 H 0 z"
              fill="rgba(0, 0, 0, .36)"
            ></path>
          </svg>
        </div>
        <div className="header-container">
          <div className="task-actions">
            <div
              className="sort-change"
              ref={ ref => this.domPanel = ref }
            >
              <div
                className="display-icon"
                onClick={ () => this.setState({ isShow: !this.state.isShow}) }
              >
                {
                  this.svgRender[singleSortType]
                }
              </div>
              <Panel
                className="sort-panel"
                transitionName="sort-panel"
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
                isShow={ this.state.isShow }
                handleClick={ this.handlePanelClick }
                chosenIndex={ singleSortType }
              >
                <div>
                  <svg
                   width="24px"
                   height="24px"
                   viewBox="3 -7 24 24"
                  >
                    <path d="M8 10.3L5.9 8.1l-.8.8 3 3c.4.3.9 0 .9-.4V-2.9H8v13.2zM12 9h11v1H12zM12 4h11v1H12zM12-1h11v1H12z"></path>
                  </svg>
                  <span>按清单</span>
                </div>
                <div>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="3 -7 24 24"
                  >
                    <path d="M9 10.3L6.9 8.1l-.8.8 3 3c.3.3.9.1.9-.4V-2.9H9v13.2zM18.5-2C14.9-2 12 .9 12 4.5s2.9 6.5 6.5 6.5S25 8.1 25 4.5 22.1-2 18.5-2zm0 12c-3 0-5.5-2.5-5.5-5.5S15.5-1 18.5-1 24 1.5 24 4.5 21.5 10 18.5 10z"></path>
                    <path d="M19 1h-1v3.7c0 .2.1.3.3.3H21V4h-2V1z"></path>
                  </svg>
                  <span>按时间</span>
                </div>
                <div>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="3 -7 24 24"
                  >
                    <path d="M9 10.3L6.9 8.1l-.8.8 3 3c.3.3.9.1.9-.4V-2.9H9v13.2zM23.6 10.2l.9-.4-5.5-11c-.2-.4-.7-.4-.9 0l-5.5 11 .9.4L15.6 6h5.9l2.1 4.2zM16.1 5L18.5.1 20.9 5h-4.8z"></path>
                  </svg>
                  <span>按标题</span>
                </div>
                <div>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="3 -7 24 24"
                  >
                    <path d="M8 10.3L5.9 8.1l-.8.8 3 3c.4.3.9 0 .9-.4V-2.9H8v13.2zM13-2h1v9h-1zM13 9h1v2h-1zM17-2h1v9h-1zM21-2h1v9h-1zM17 9h1v2h-1zM21 9h1v2h-1z"></path>
                  </svg>
                  <span>按优先级</span>
                </div>
              </Panel>
            </div>
            <div
              className="show-finished"
              onClick={ e => changeShowFinished() }
            >
              <svg width="24px" height="24px" viewBox="-8 0 24 24">
                <path d="M-8 0 h 24 v 24 H -8 z" style={{ fill: 'transparent'}}></path>
                <path d="M-2 17.5v-11c0-.3.2-.5.5-.5h11c.3 0 .5.2.5.5V12h1V6.5c0-.8-.7-1.5-1.5-1.5h-11C-2.3 5-3 5.7-3 6.5v11c0 .8.7 1.5 1.5 1.5H2v-1h-3.5c-.3 0-.5-.2-.5-.5z"></path>
                {
                  singleShowFinished ?
                  <g>
                    <path d="M8 14c-3.2 0-4.5 3-4.5 3s1.3 3 4.5 3 4.5-3 4.5-3-1.3-3-4.5-3zm0 5c-1.1 0-2-.4-2.7-1.2-.3-.3-.5-.5-.7-.8.2-.3.4-.5.6-.8C6 15.4 6.9 15 8 15s2 .4 2.7 1.2c.2.3.5.5.6.8-.2.3-.4.5-.6.8C10 18.6 9.1 19 8 19z"></path>
                    <circle cx="8" cy="17" r="1"></circle>
                    <path d="M7.2 7.5l-4.7 5.8-2-2.6-.8.6 2.4 3.1c.2.3.6.3.8 0L8 8.1l-.8-.6z"></path>
                  </g>
                  :
                  <path d="M11.2 15.2l1.1-.9-.6-.8-1.4 1c-.6-.2-1.4-.5-2.3-.5-3.2 0-4.5 3-4.5 3s.4.9 1.3 1.8l-1.1.9.6.8 1.4-1c.6.2 1.4.5 2.3.5 3.2 0 4.5-3 4.5-3s-.4-.9-1.3-1.8zm-5.9 2.6c-.3-.3-.5-.5-.7-.8.2-.3.4-.5.6-.8C6 15.4 6.9 15 8 15c.5 0 1 .1 1.4.3l-3.8 2.8-.3-.3zM8 19c-.5 0-1-.1-1.5-.3l3.8-2.9c.1.1.3.2.4.3.2.3.5.5.6.8-.2.3-.4.5-.6.8C10 18.6 9.1 19 8 19zM7.2 7.5l-4.7 5.8-2-2.6-.8.6 2.4 3.1c.2.3.6.3.8 0L8 8.1l-.8-.6z"></path>
                } 
              </svg>
            </div>
          </div>
          <h1>
            所有
          </h1>
        </div>
      </div>
    )
  }
}

Navigation.propTypes = {
  // 是否显示已完成的清单
  singleShowFinished: PropTypes.bool,
  // 修改是否显示已完成清单回调函数
  changeShowFinished: PropTypes.func,
  // 排序方式
  singleSortType: PropTypes.number,
  // 头部呈现文案
  textHeader: PropTypes.string,
}

export default Navigation