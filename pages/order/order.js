Page({
  data: {
    // tab切换    
    currentTab: 0,
  },
  nav_click: function (e) {
    this.setData({
      currentTab: e.target.dataset.nav,
    })
  },
  swiperChange: function (e) {
    console.log(e)
    this.setData({
      currentTab: e.detail.current,
    })
  },
  // 取消订单
  removeOrder: function (e) {
    // console.log(e.currentTarget.dataset.ordersn)
    var orderID = e.currentTarget.dataset.ordersn;
    wx.showModal({
      title: '提示',
      content: '你确定要取消订单吗？',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '操作成功！',
            duration: 2000
          });
        }
        // res.confirm && wx.request({
        //   url:'',
        //   method:'post',
        //   data: {
        //     orderID:orderID,
        //   },
        //   header: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   },
        //   success: function(res){
        //     if(res){
        //       wx.showToast({
        //         title: '操作成功！',
        //         duration: 2000
        //       });
        //       // 重新加载数据loadOrderList要写
        //     }else{
        //       wx.showToast({
        //         title: res.data.err,
        //         duration: 2000
        //       });
        //     }
        //   }
        // })
      }
    })
  }
})