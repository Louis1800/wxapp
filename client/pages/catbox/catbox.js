// catbox.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    select: [],
    curimg: "",
    info: {
      name: "盒子",
      avatar: "./images/catavatar.jpg",
      tags: [
        "美短",
        "虎斑",
        "折耳",
        "女王",
        "王座是餐椅",
        "怕是个傻子"
      ]
    }
  },

  _loadImg: function () {
    const IMGNUM = 6;
    let imgs = [];
    let select = [];
    for (let i = 1; i <= IMGNUM; i++) {
      let num = this._addPreZero(i)
      let r = `./images/cat_${num}.jpg`;
      imgs.push(r);
      select.push(false);
    }

    this.setData({
      imgs: imgs,
      select: select
    })
  },
  _addPreZero: (num) => {
    return ('00' + num).slice(-3);
  },

  zoomin: function (e) {
    let select = [];
    for (let i = 0; i < this.data.select.length; i++) {
      select[i] = false;
    }
    // 选择图片列表下标，与图片名关联
    let index = parseInt(e.target.dataset.src.slice(-7, -4)) - 1;
    select[index] = true;
    console.log(select)
    this.setData({
      curimg: e.target.dataset.src,
      select: select
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadImg();
    wx.get
  }
})