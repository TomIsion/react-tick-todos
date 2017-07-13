import React from 'react'

// 取得今天的年月日
const dateNow = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)

const reg = /YYY?Y?|MM|DD?|hh?|mm?|ss?|./g

const judgeDate = d => !((Object.prototype.toString.call(d) === '[object Date]') && isNaN(d.getTime()))

function dateFormat(strReg = 'YYYY/MM/DD', objPlus = {}, date = new Date()) {
  let innerDate = date

  // 所传递的是 字符串类型
  // 兼容 IE / 低版本Firefox 以及 iOS 下的 Safari
  // 获取需要处理的 Date 对象
  if (typeof date === 'string') {
    judgeDate(innerDate = new Date(date.replace(/-/g, '/'))) || (innerDate = new Date(date))
  }

  // 根据 objPlus 修改操作的 Date 对象
  if (objPlus.DD) {
    innerDate.setDate(innerDate.getDate() + objPlus.DD)
  }

  // 根据字符串提取所需要格式化的部分
  const arrFormat = strReg.match(reg)

  // 匹配各个部分的处理函数
  const objGetSepInfo = {
    D: () => innerDate.getDate(),
    DD: () => innerDate.getDate() < 10 ? `0${innerDate.getDate()}` : innerDate.getDate(),
    M: () => innerDate.getMonth() + 1,
    MM: () => innerDate.getMonth() + 1 < 10 ? `0${innerDate.getMonth() + 1}` : innerDate.getMonth() + 1,
    YYYY: () => innerDate.getFullYear(),
    h: () => innerDate.getHours(),
    hh: () => innerDate.getHours() < 10 ? `0${innerDate.getHours()}` : innerDate.getHours(),
    m: () => innerDate.getMinutes(),
    mm: () => innerDate.getMinutes() < 10 ? `0${innerDate.getMinutes()}` : innerDate.getMinutes(),
    s: () => innerDate.getSeconds(),
    ss: () => innerDate.getSeconds() < 10 ? `0${innerDate.getSeconds()}` : innerDate.getSeconds(),
  }

  // 遍历数组返回拼接值
  return arrFormat.reduce((pre, cur) => `${pre}${
    objGetSepInfo[cur] ? objGetSepInfo[cur]() : cur
  }`, '')
}

const date2Chinese = date => {
  if (!date) {
    return 
  } else {
    const dateFinish = new Date(date)
    const numGap = dateFinish.getTime() - dateNow.getTime()

    if (numGap === 0) {
      return <div className="time">今天</div>
    } else if (numGap === 1000 * 60 * 60 * 24) {
      return <div className="time">明天</div>
    } else if (numGap === - 1000 * 60 * 60 * 24) {
      return <div className="time overtime">昨天</div>
    } else if (numGap > 1000 * 60 * 60 * 24) {
      return <div className="time">{
        dateFinish.getFullYear() === dateNow.getFullYear() ?
        dateFormat('M月D日', {}, dateFinish) :
        dateFormat('YYYY年M月D日', {}, dateFinish)
      }</div>
    } else {
      return <div className="time overtime">{
        dateFinish.getFullYear() === dateNow.getFullYear() ?
        dateFormat('M月D日', {}, dateFinish) :
        dateFormat('YYYY年M月D日', {}, dateFinish)
      }</div>
    }
  }
}

export {
  dateFormat,
  date2Chinese,
}