import React, { Component } from 'react'
import PropTypes from 'prop-types'

import YearMonthCalendar from './YearMonthCalendar'

import cln from 'classnames'

import './Calendar.css'

// 日 一 二 三 四 五 六
// 42 个格子
const numTotal = 42
const numTotalLine = 6

const month2Chinese = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
const month2DayNum = ({ year, month }) => {
  // 加上判断上个月有多少天的逻辑
  if (month === -1) {
    year = year - 1
    month = 12
  } else if (month === 12) {
    year = year + 1
    month = 1
  }

  if (month === 1 && ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) {
    return 29
  } else {
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
  }
}
const getTrueMonthYear = (year, month) => {
  if (month === -1) {
    return {
      year: year - 1,
      month: 11,
    }
  } else if (month === 12) {
    return {
      year: year + 1,
      month: 0,
    }
  } else {
    return {
      year,
      month,
    }
  }
}

class Calendar extends Component {
  constructor(props) {
    super(props)

    // 默认选中之前选中的日期
    // 默认高亮当天
    
    // 当天的高亮只需要是属性就可以了
    // 这个不会随着用户交互变化
    this.nowDate = new Date(Date.now())

    // 默认呈现选中日期当前的月份 如果没有 则显示当天的月份    
    const date = props.date ? new Date(props.date) : this.nowDate

    this.state = {
      date: props.date,
      year: date.getFullYear(),
      month: date.getMonth(),
      // 代表是呈现单月详细的日历还是只是呈现月份相关
      singleDetail: true,
    }

    this.handleMonthClick = this.handleMonthClick.bind(this)
  }

  // 详细日历模块选择某天
  handleDayClick(item) {
    const {
      year,
      month,
      day,
    } = item

    this.setState({
      year,
      month,
      date: `${year}-${month + 1}-${day}`,
    })

    this.props.handleClick(`${year}-${month + 1}-${day}`)
  }

  // 年月日历面板模块选择某个月份
  handleMonthClick(year, month) {
    this.setState({
      singleDetail: true,
      year,
      month,
    })
  }

  // 详细日历面板模块上下月切换
  handleMonthChange(single) {
    const month = ~single ? this.state.month + 1 : this.state.month - 1

    this.setState({
      ...getTrueMonthYear(this.state.year, month)
    })
  }

  render() {
    let {
      date,
      year,
      // month 是从 0 开始的
      month,
      singleDetail,
    } = this.state

    const objNowDate = {
      year: this.nowDate.getFullYear(),
      month: this.nowDate.getMonth(),
      day: this.nowDate.getDate(),
    }

    const objChosenDate = {
      year: date && new Date(date).getFullYear(),
      month: date && new Date(date).getMonth(),
      day: date && new Date(date).getDate(),
    }

    let arr = []

    // 1. 首先需要知道这个月有多少天
    // 2. 然后知道这个月的第一天是礼拜几
    const numOfMonth = month2DayNum({ year, month })
    const numOfPreviousMonth = month2DayNum(getTrueMonthYear(year, month - 1))
    // 获取这个月的第一天是礼拜几 从0开始
    const weekDayNum = (new Date(`${year}-${month + 1}-1`)).getDay()

    // 3. 需要判断一共6行 当前月的开始 是从第一行还是第二行开始
    // 3.1 先获取占满的一共多少行
    const numFullLine = Math.ceil((weekDayNum + numOfMonth) / 7)
    // 3.2 判断真正开始的是哪一行
    let beginLine = 0
    if (numFullLine === 5) {
      if (weekDayNum < 4) {
        beginLine = 1
      }
    } else if (numFullLine === 4) {
      beginLine = 1
    }

    // 4. 可以生成真正渲染的数组了
    // 4.1 先放入上个月补足的内容
    const objPreviousMonthYear = getTrueMonthYear(year, month - 1)
    for (let i = numOfPreviousMonth; i > numOfPreviousMonth - weekDayNum - beginLine * 7; i--) {
      // arr.unshift(i)
      arr.unshift({
        ...objPreviousMonthYear,
        day: i,
        type: -1,
        singleTodayChosen: objPreviousMonthYear.year === objNowDate.year && objPreviousMonthYear.month === objNowDate.month && i === objNowDate.day,
        chosen: objPreviousMonthYear.year === objChosenDate.year && objPreviousMonthYear.month === objChosenDate.month && i === objChosenDate.day,
      })
    }
    // 4.2 再放入这个月的数量
    for (let j = 1; j <= numOfMonth; j++) {
      // arr.push(i)
      arr.push({
        year,
        month,
        day: j,
        type: 0,
        singleTodayChosen: year === objNowDate.year && month === objNowDate.month && j === objNowDate.day,
        chosen: year === objChosenDate.year &&  month === objChosenDate.month && j === objChosenDate.day,
      })
    }
    // 4.3 最后放入下个月的补足
    const objNextMonthYear = getTrueMonthYear(year, month + 1)
    const numNextMonthComplete = numFullLine * 7 - weekDayNum - numOfMonth + (numTotalLine - numFullLine - beginLine) * 7
    for (let k = 1; k <= numNextMonthComplete; k++) {
      arr.push({
        ...objNextMonthYear,
        day: k,
        type: 1,
        singleTodayChosen: objNextMonthYear.year === objNowDate.year && objNextMonthYear.month === objNowDate.month && k === objNowDate.day,
        chosen: objNextMonthYear.year === objChosenDate.year &&  objNextMonthYear.month === objChosenDate.month && k === objChosenDate.day,
      })
    }

    return (
      <div className="calendar">
        <table
          style={ !singleDetail ? { display: 'none' } : {} }
        >
          <caption
            className="calendar-nav"
          >
            <i
              onClick={ () => this.handleMonthChange(-1) }
            >
              <svg
                width="100%" height="100%"
                viewBox="8 -8 24 24"
              >
                <path d="M22 9.7L16.3 4 22-1.7l.7.7-5 5 5 5z"></path>
              </svg>
            </i>
            <i
              onClick={ () => this.handleMonthChange(1) }
            >
              <svg
                width="100%" height="100%"
                viewBox="8 -8 24 24"
              >
                <path d="M18 9.7l-.7-.7 5-5-5-5 .7-.7L23.7 4z"></path>
              </svg>
            </i>
            <div
              className="info-container"
              onClick={ () => this.setState({ singleDetail: false, }) }
            >
              <span>{ month2Chinese[month] }</span>
              <span>{ year }</span>
            </div>
          </caption>
          <thead>
            <tr>
              <td>日</td>
              <td>一</td>
              <td>二</td>
              <td>三</td>
              <td>四</td>
              <td>五</td>
              <td>六</td>
            </tr>
          </thead>
          <tbody>
            {
              arr.reduce((pre, cur) => {
                if (pre[pre.length - 1] && pre[pre.length - 1].length < 7) {
                  pre[pre.length - 1].push(
                    <td
                      className={ cln({
                        current: cur.type === 0,
                        'today-chosen': cur.singleTodayChosen,
                        'chosen': cur.chosen,
                      }) }
                      onClick={ () => this.handleDayClick(cur) }
                      key={ `${cur.type}-${cur.day}` }
                    >
                      {cur.day}
                    </td>
                  )
                } else {
                  pre[pre.length] = [
                    <td
                      className={ cln({
                        current: cur.type === 0,
                        'today-chosen': cur.singleTodayChosen,
                        'chosen': cur.chosen,
                      }) }
                      onClick={ () => this.handleDayClick(cur) }
                      key={ `${cur.type}-${cur.day}` }
                    >
                      {cur.day}
                    </td>
                  ]
                }
                return pre
              }, [])
              .map((item, index) => <tr key={ `${month}-${index}` }>{item}</tr>)
            }
          </tbody>
        </table>
        <YearMonthCalendar
          year={ year }
          month={ month }
          handleMonthChange={ this.handleMonthClick }
          style={ singleDetail ? { display: 'none' } : {} }
        />
      </div>
    )
  }
}

Calendar.propTypes = {
  date: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Calendar