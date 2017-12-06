//homepage.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData: {},
    doc: [],
    info: {
      name: "刘施羽",
      avatar: "../../images/avatar.jpg",
      call: "./call_s.png"
    },
    tags: []
  },
  //事件处理函数
  bindViewTap: function (e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `../${url}/${url}`
    })
  },
  callme: function () {
    wx.makePhoneCall({
      phoneNumber: '18600405049',
    })
  },
  unfold: function (e) {

    if (this.data.doc[e.currentTarget.dataset.id].show == true) {
      return
    }

    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
      delay: 0
    })
    animation.opacity(0).step();
    this.setData({
      animationData: animation.export()
    })

    setTimeout(() => {
      animation.opacity(1).translate(10).step()
      this.setData({
        animationData: animation.export()
      })
    }, 200)

    this.close();
    let r = this.data.doc[e.currentTarget.dataset.id];
    r.show = !r.show;
    this.setData({
      doc: this.data.doc
    })
  },
  close: function () {
    let that = this;
    for (let i in that.data.doc) {
      that.data.doc[i].show = false
    }
    that.setData({
      doc: that.data.doc
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this._testCgi()
  },

  // 得到简历数据
  _testCgi: function () {
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/demo`,
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          doc: result.data.data.doc,
          tags: result.data.data.tags
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
