//read.js
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
    books: [],
    users: [],
    calendar: []
  },

  // 获取用户数据
  _getUsers() {
    util.showBusy("正在加载用户数据")
    let that = this
    qcloud.request({
      url: `${config.service.request}/users`,
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          users: result.data.data.users
        })
      },
      fail(error) {
        util.showModel('请求失败', error)
        console.log('request fail', error)
      }
    })
  },

  // 获取书籍数据
  _getBooks() {
    util.showBusy("正在加载书籍数据")
    let that = this
    qcloud.request({
      url: `${config.service.host}/weapp/books`,
      login: false,
      success(result) {
        util.showSuccess('书籍列表请求完成')
        that.setData({
          books: result.data.data.books
        })
      },
      fail(error) {
        util.showModel('请求失败', error)
        console.log('request fail', error)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this._getUsers()
    this._getBooks()
    this._calendar()
  },

  _calendar() {
    let that = this
    const current = new Date()
    let MONTHNUM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let calendar = [[]]
    let run = false

    let year = current.getFullYear()
    let month = current.getMonth()
    let day = current.getDate()
    let week = current.getDay()
    if (week === 0) { week = 7 }

    // 根据当前日期倒推当月一日是周几
    weekstart = week + 1 - day % 7
    console.log(weekstart)
    if (weekstart < 0) {
      weekstart = weekstart + 7
    }
    console.log(weekstart)

    // 日历第一行

    if (weekstart !== 1) {
      for (var i = weekstart; i > 1; i--) {
        calendar[0].push({ active: false })
      }
    }
    for (var i = 8 - weekstart; i > 0; i--) {
      calendar[0].push({ active: true })
    }

    // 日历中间几行
    if (year % 4 !== 0) {
      run = true
      MONTHNUM[1] = 29
    }
    // 日历行数
    let line = Math.ceil((MONTHNUM[month] + weekstart - 1) / 7)
    console.log("line:" + line)
    for (i = 1; i < line - 1; i++) {
      calendar.push(
        [
          { active: true },
          { active: true },
          { active: true },
          { active: true },
          { active: true },
          { active: true },
          { active: true }
        ])
    }

    // 设置最后一行
    let lastline = MONTHNUM[month] + (weekstart - 1) - (line - 1) * 7
    calendar.push([])

    if (lastline !== 0) {
      for (i = 0; i < lastline; i++) {
        calendar[line - 1].push({ active: true })
      }
      for (i = 0; i < 7 - lastline; i++) {
        calendar[line - 1].push({ active: false })
      }
    }
    
    console.log(calendar)
    that.setData({
      calendar:canlendar
    })
  }
})
