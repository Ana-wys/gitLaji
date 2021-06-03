// pages/im/img.js
const md5 = require('../im/md5');
var that = ''




Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgB64: '',
    list: [],
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgx.xiawu.com%2Fxzimg%2Fi4%2Fi3%2F2250510951%2FTB29fbjcFXXXXb1XpXXXXXXXXXX_%21%212250510951.jpg&refer=http%3A%2F%2Fimgx.xiawu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625299474&t=ef67f1e45c720a34f045093c400932fd"
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    let names = options.titel
    that.setData({
      img: names
    })
    that.img = options.titel
    var data1 = (new Date()).valueOf()
    var a = "24d9fa44fce8becfb5da8ecea2b6deb2"
    // console.log(names);
    var b = md5.hexMD5(a + data1)
    that.getB64ByUrl(names)
  },
  getB64ByUrl: function (url) {
    const FileSystemManager = wx.getFileSystemManager();
    FileSystemManager.readFile({
      filePath: url,
      encoding: 'base64',
      success(res) {
        that.setData({
          imgB64: res.data
        });
        that.getData()
      }
    })
  },
  getData() {
    wx.request({
      url: 'https://api.tianapi.com/txapi/imglajifenlei/index?key=273835cd64acdc6712a5b26599961913',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        img: that.data.imgB64
      },
      method: "POST",
      success(res) {
        let lists2 = res.data.newslist;
        console.log(lists2);
        var max = []
        for (let i = 0; i < lists2.length; i++) {
          if (lists2[i].lajitype != 4) {
            let num = lists2[i].trust
            max.push(num)
          }
        }
        console.log(Math.max(...max));
        let a = Math.min(...max)
        for (let s = 0; s < lists2.length; s++) {
          if (lists2[s].trust == a) {
            if (lists2[s].lajitype == 1) {
              lists2[s].lajitype = "可回收垃圾"
            } else if (lists2[s].lajitype == 2) {
              lists2[s].lajitype = "有害垃圾"
            } else if (lists2[s].lajitype == 3) {
              lists2[s].lajitype = "处于垃圾(湿)"
            } else {
              lists2[s].lajitype = "其它垃圾(干)"
            }
            that.setData({
              list: lists2[s]
            })
            console.log(that.data.list);
          }
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  getNo(){
    wx.navigateBack({
      delta: 0,
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})