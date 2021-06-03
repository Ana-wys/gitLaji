const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({
  /**
   * 页面的初始数据
   */
  //http://cdn5.lizhi.fm/audio/2017/09/14/2624423164343832582_hd.mp3
  data: {
      lists:[],
      tab:["饼干","卫生巾","耳机","数据线","电池","避孕套","香蕉皮","湿纸巾","小龙虾","衣服","充电电池"],
      img:[],
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.src = 'http://cdn5.lizhi.fm/audio/2017/07/22/2614425090367228934_hd.mp3'
    var data=(new Date()).valueOf()
    wx.getSetting({
      success: function(res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })


    
  }, 
  getList(e){
    let that=this
    let ana=e.detail.value
    console.log(e.detail.value);
    if(ana.length==0){
      that.setData({
        lists:[]
      }) 
      return;
    }
    wx.request({
      url:'https://v2.alapi.cn/api/garbage',
      data:{
        token:"Kf7YYxPrquU7zd4H",
        name:ana
      },
      success(res){
        let lists2 = res.data.data;
        console.log(lists2);
        that.setData({
          lists:res.data.data
          
        })
       
      },
      fail:function(err){
        console.log(err);
      }
    })
  },
  
 toDetil(e){ 
   let names=e.currentTarget.dataset.title
      console.log(e.currentTarget.dataset.title);
      wx.navigateTo({
        url: `../im/room?titel=${names}`,
      })
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    
  },
  
  getTp(){
    let that=this
   
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为i mg标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
         wx.navigateTo({
        url: `../im/img?titel=${tempFilePaths}`,
    })
      }
    })
   
   
  },
getTx(){

},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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