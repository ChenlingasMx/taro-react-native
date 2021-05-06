export default {
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/detail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#9b63cd',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: '#fff'
  },
  tabBar:{
    color: '#FFC0CB',
    selectedColor: '#9b63cd',
    backgroundColor: '#fff',
    list:[
      {
        pagePath:"pages/index/index",
        text:"首页",
        iconPath:"assets/images/chart.png",
        selectedIconPath:"assets/images/chart.png"
      },
      {
        pagePath:"pages/my/index",
        text:"我的",
        iconPath:"assets/images/caramer.png",
        selectedIconPath:"assets/images/caramer.png"
      }
    ]
  }
}
