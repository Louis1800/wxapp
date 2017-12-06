//calendar.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    calendar: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this._calendar()
  },

  _calendar() {
    let that = this
    const current = new Date()
    let MONTHNUM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let calendar = [[]]

    let year = current.getFullYear()
    let month = current.getMonth()
    let day = current.getDate()
    let week = current.getDay()
    if (week === 0) { week = 7 }

    // 根据当前日期倒推当月一日是周几
    let weekstart = week + 1 - day % 7
    if (weekstart < 0) {
      weekstart = weekstart + 7
    }

    // 日历第一行
    let count = 1
    let lastmonth = MONTHNUM[month - 1]

    // when weekstart = 2
    // r = lastmonth - 0
    // when weekstart = 3
    // r = lastmonth - 1
    // when weekstart = 4
    // r = lastmonth - 2
    if (weekstart !== 1) {
      for (let i = weekstart; i > 1; i--) {
        let r = lastmonth - i + 2
        calendar[0].push({
          active: false,
          date: r
        })
      }
    }
    for (let i = 8 - weekstart; i > 0; i--) {

      calendar[0].push({
        active: true,
        date: count
      })
      count++
    }

    // 判断闰年
    if (year % 4 !== 0) {
      MONTHNUM[1] = 29
    }

    // 日历行数
    let line = Math.ceil((MONTHNUM[month] + weekstart - 1) / 7)
    for (let i = 0; i < line - 2; i++) {
      let nthline = []
      for (let j = 0; j < 7; j++) {
        nthline.push({
          active: true,
          date: count
        })
        count++
      }
      calendar.push(nthline)
    }

    // 设置最后一行
    let lastcount = MONTHNUM[month] + (weekstart - 1) - (line - 1) * 7

    if (lastcount !== 0) {
      let lastline = []
      for (let i = 0; i < lastcount; i++) {
        lastline.push({
          active: true,
          date: count
        })
        count++
      }
      for (let i = 0; i < 7 - lastcount; i++) {
        if (count > MONTHNUM[month]) { count = 1 }
        lastline.push({
          active: true,
          date: count
        })
        count++
      }
      calendar.push(lastline)
    }

    // 设置当前日期
    let cl = Math.floor((day + (weekstart - 1) - 1) / 7)
    let weekindex = week - 1
    calendar[cl][weekindex].isnow = true
    that.setData({
      calendar: calendar
    })
  }
})
