Page({
  data: {
    selProvince: '请选择',
    selCity: '请选择',
    selDistrict: '请选择',
    provinces: ['广东省', '北京市', '西藏'],
    citys: ['广州市', '阳光市', '阳西市'],
    districts: ['天河区', '番禺区'],
  },
  // 选择省份
  bindPickerChange: function (e) {
    var that = this;
    that.setData({
      selProvince: that.data.provinces[e.detail.value]
    })
    console.log(that.data.provinces[e.detail.value])
  },
  // 选择城市
  bindCitysChange: function (e) {
    var that = this;
    that.setData({
      selCity: that.data.citys[e.detail.value]
    })
    console.log(that.data.citys[e.detail.value])
  },
  //　选择区
  bindDistrictsChange: function (e) {
    var that = this;
    that.setData({
      selDistrict: that.data.districts[e.detail.value]
    })
    console.log(that.data.districts[e.detail.value])
  }
})