Page({
  data: {
    showModalStatus: false,
  },
  pay_click: function () {
    var that = this
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
      that.setData({
        showModalStatus: true,
      })
    }, 2000)
  },
  colse_pay: function () {
    var that = this
    that.setData({
      showModalStatus: false,
    })
  },
  pay_success: function () {
    const that = this
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
        title: '支付成功',
        success: function (res) {
          that.setData({
            showModalStatus: false,
          })

        }
      })
    }, 2000)

  },

})