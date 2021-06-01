// pages/im/room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
      let names=options.titel  
      console.log(names);
        wx.request({
        url:'https://v2.alapi.cn/api/garbage',
        data:{
          token:"Kf7YYxPrquU7zd4H",
          name:names
        },
        success(res){
          let lists2 = res.data.data;
         
          for (let i = 0; i < lists2.length; i++) {
            if (lists2[i].name == names) {
              if(lists2[i].type==1){
                lists2[i].type="可回收垃圾"
              }else if(lists2[i].type==2){
                lists2[i].type="有害垃圾"
              }else if(lists2[i].name==3){
                lists2[i].type="处于垃圾(湿)"
              }else{
                lists2[i].type="其它垃圾(干)"
              }
              that.setData({
                list:lists2[i]
              })
              console.log(that.data.list);
            }
          }
        },
        fail:function(err){
          console.log(err);
        }
      })
      
  },
  getNo(){
    wx.navigateTo({
      url: `../index/index`,
     
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