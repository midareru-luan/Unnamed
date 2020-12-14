

// pages/new/new.js
const app=getApp();
const NULL=res=>{};//空函数
const UUID='0';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    a:0,
    onbluetooth:0,
    erc:0,
    botOut:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkbluetooth()
    this.checkwifi()
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

  },
  sub: function () {
    this.setData({
      a:1,
    })
    function yes(){

    }
    function no(){
      
    }
    app.alert("测试","测试内容",yes,no)
  },
  bluetooth: function(){
    wx.openBluetoothAdapter({
      mode: "central",
      success: res=>{
        this.setData({
          onbluetooth:1
        })
        wx.startBluetoothDevicesDiscovery({
          allowDuplicatesKey: false,
          services:[UUID],
          success:res=>{
            this.setData({
              onbluetooth:1,
            })
            wx.stopBluetoothDevicesDiscovery({
              success: (res) => {},
            })
          }
        })
      },
      fail: res=>{
        app.alert("连接失败","请打开蓝牙：（",NULL,NULL)
      },
    })
  },
  checkbluetooth:function()
  {
    wx.onBluetoothAdapterStateChange(res=>{
      fail:res=>{
        console.log(res)
        this.setData({
          erc: res
        })
      }
    })
  },
  checkwifi:function()
  {

  },
  myInf: function()
  {
    wx.navigateTo({
      url: '../info',
    })
  },
  callout: function()
  {
    this.setData({
      botOut:true,
    })
  },
  callback: function()
  {
    this.setData({
      botOut:false,
    })
  },
})