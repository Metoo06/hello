var app = getApp();
Page({
  data: {
    // 头部轮播图
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 文章详情导航
    goods_nav_v: 0,
    //购买数量
    buynum: 1,
    productId: 0,
    // 是否收藏
    isCollect: 0
  },
  // 点击切换
  goods_click: function (e) {
    var that = this;
    that.setData({
      goods_nav_v: e.target.dataset.current
    })
    console.log(e.target.dataset.current)
  },
  // 滑动切换
  bindChange: function (e) {
    var that = this;
    that.setData({
      goods_nav_v: e.detail.current
    })
  },
  // 弹窗
  setModalStatus: function (e) {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })

    this.animation = animation
    animation.translateY(300).step();

    this.setData({
      animationData: animation.export()
    })

    if (e.currentTarget.dataset.status == 1) {

      this.setData(
        {
          showModalStatus: true
        }
      );
    }
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation
      })
      if (e.currentTarget.dataset.status == 0) {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)
  },
  // 购买数量加减
  changeNum: function (e) {
    var that = this;
    console.log(e.target.dataset.buynum);
    if (e.target.dataset.buynum == 0) {
      if (this.data.buynum <= 1) {
        buynum: 1;
      } else {
        this.setData({
          buynum: this.data.buynum - 1
        })
      }
    } else {
      this.setData({
        buynum: this.data.buynum + 1
      })
    }
  },
  //添加到收藏
  addFavorites: function (e) {
    console.log(1)
    var that = this;
    wx.request({
      url: 'http://localhost/xxx/index.php/Api/Product/col',
      method: 'post',
      data: {
        uid: 1,
        pid: 2,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // //--init data        
        var data = res.data;
        if (data.status == 1) {
          wx.showToast({
            title: '操作成功！',
            duration: 2000
          });
          //变成已收藏，但是目前小程序可能不能改变图片，只能改样式
          // that.data.itemData.isCollect = true;
          that.setData({
            isCollect: 1
          })
        } else {
          wx.showToast({
            title: data.err,
            duration: 2000
          });
        }
      },
      fail: function () {
        // fail
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      }
    });
  },
  // 加入购物车
  addShopCart: function (e) {
    var that = this;
    wx.request({
      url: 'http://localhost/xxx/index.php/Api/Shopping/add',
      method: "post",
      data: {
        uid: 1,
        pid: 288,
        num: that.data.buynum
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var data = res.data;
        if (data.status == 1) {
          var ptype = e.currentTarget.dataset.type;
          if (ptype == 'buynow') {
            wx.redirectTo({
              url: '../order/pay?cartId=' + data.cart_id
            });
            return;
          } else {
            wx.showToast({
              title: '加入购物车成功',
              icon: 'success',
              duration: 2000
            });
          }
        } else {
          wx.showToast({
            title: data.err,
            duration: 2000
          });
        }
      }
    })
  }
})
