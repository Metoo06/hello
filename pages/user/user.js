
var app = getApp()
Page({
  data: {
    userInfo: {},
    loadingHidden: false,
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        loadingHidden: true
      })
    });
    console.log(that.data.userInfo)
  },
  // 关于我们
  aboutUs: function () {
    wx.showModal({
      title: '关于我们',
      content: '本小程序商城是我无聊时做出来的，哦就这样，祝大家使用愉快！',
      showCancel: false
    })
  }
})