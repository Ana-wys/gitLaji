Page({

  /**
   * 页面的初始数据
   */
  data: {
      lists:[],
      tab:["饼干","卫生巾","耳机","数据线","电池","避孕套","香蕉皮","湿纸巾","小龙虾","衣服","充电电池"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   
    
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
       console.log(that.data.lists);
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
  onReady: function () {
    
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