import React, { Component } from 'react'
import PropTypes from 'prop-types'

import cln from 'classnames'

// 实现年的翻页效果
// P1 使用无限的数据源 需要 state 多维护一个当前页码 以判断到了临界状态是不是要增加渲染数据源
// P2 使用有限的数据源 重用 主要是需要获取动画结束的状态

class YearMonthCalendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrYear: [
        this.props.year - 4, this.props.year - 3, this.props.year - 2,
        this.props.year - 1, this.props.year, this.props.year + 1,
        this.props.year + 2, this.props.year + 3, this.props.year + 4
      ],
      year: this.props.year,
      objTransitionStyle: {
        transform: 'translateX(-33%)',
      },
    }

    this.handleBackDefaultStyle = this.handleBackDefaultStyle.bind(this)
  }

  // 年月日历面板模块前后年切换
  handleYearChange(single) {
    this.single = single

    if (~single) {
      // 表示向后翻页
      this.setState({
        objTransitionStyle: {
          transition: 'transform 200ms linear 50ms',
          transform: 'translateX(-66%)',
        },
      })
    } else {
      // 表示向前翻页
      this.setState({
        objTransitionStyle: {
          transition: 'transform 200ms linear 50ms',
          transform: 'translateX(0)',
        },
      })
    }
  }

  handleBackDefaultStyle() {
    if (~this.single) {
      const arrYear = this.state.arrYear.concat([
        this.state.arrYear[8] + 1,
        this.state.arrYear[8] + 2,
        this.state.arrYear[8] + 3
      ]).splice(3, 9)

      this.setState({
        arrYear,
        objTransitionStyle: {
          transform: 'translateX(-33%)',
        },
      })
    } else {
      const arrYear = [
        this.state.arrYear[0] - 3,
        this.state.arrYear[0] - 2,
        this.state.arrYear[0] - 1
      ].concat(this.state.arrYear).splice(0, 9)

      this.setState({
        arrYear,
        objTransitionStyle: {
          transform: 'translateX(-33%)',
        },
      })
    }
  }

  // 年月日历面板模块选择某个月份
  handleMonthChange(month) {
    this.props.handleMonthChange(this.state.year, month)
  }

  componentDidMount() {
    this.domTransition.addEventListener('transitionend', this.handleBackDefaultStyle , false)
  }

  componentWillUnMount() {
    this.domTransition.removeEventListener('transitionend', this.handleBackDefaultStyle , false)
  }

  render() {
    const {
      year: defaultYear,
      month,
    } = this.props

    const {
      arrYear,
      year,
      objTransitionStyle,
    } = this.state

    return (
      <table
        className="month-cal-container"
      >
        <caption>
          <i
            onClick={ () => this.handleYearChange(-1) }
          >
            <svg
              width="100%" height="100%"
              viewBox="8 -8 24 24"
            >
              <path d="M22 9.7L16.3 4 22-1.7l.7.7-5 5 5 5z"></path>
            </svg>
          </i>
          <i
            onClick={ () => this.handleYearChange(1) }
          >
            <svg
              width="100%" height="100%"
              viewBox="8 -8 24 24"
            >
              <path d="M18 9.7l-.7-.7 5-5-5-5 .7-.7L23.7 4z"></path>
            </svg>
          </i>
          <div className="info-container">
            <div
              className="clear"
              ref={ ref => this.domTransition = ref }
              style={ objTransitionStyle }
            >
              {
                arrYear.map(item =>
                  <span
                    key={ item }
                    className={ item === year ? 'chosen' : '' }
                    onClick={ () => this.setState({
                      year: item,
                    }) }
                  >{ item }</span>
                )
              }
            </div>
          </div>
        </caption>
        <tbody>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            .reduce((pre, cur) => {
              if (!pre.length || pre[pre.length - 1].length === 4) {
                pre.push([cur])
              } else {
                pre[pre.length - 1].push(cur)
              }
              return pre
            }, [])
            .map(item =>
              <tr>
                {
                  item.map(td =>
                    <td
                      onClick={ () => this.handleMonthChange(td - 1) }
                      className={ cln({
                        chosen: td === month + 1 && year === defaultYear
                      }) }
                    >{ `${td}月` }</td>
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}

YearMonthCalendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  handleMonthChange: PropTypes.func,
}

export default YearMonthCalendar