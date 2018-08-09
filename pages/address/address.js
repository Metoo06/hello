Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  selectTap: function (e) {
    console.log(e)
  },
  // 点击跳到添加页面
  addAddess: function () {
    wx.navigateTo({
      url: "/pages/address-add/address-add"
    })
  },
  // 点击跳到编辑页面
  editAddess: function (e) {
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/address-add/address-add?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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