export default {
  pages: [
    'pages/index/index',
    'pages/home/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color: 'black',
    selectedColor: 'red',
    backgroundColor: 'white',
    list:[
      {
        pagePath:"pages/index/index",
        text:"首页",
        //iconPath:"pages/images/a.jpg",
        //selectedIconPath:"pages/images/b.jpg"
      },
      {
        pagePath:"pages/home/index",
        text:"我的",
        //iconPath:"pages/images/a.jpg",
        //selectedIconPath:"pages/images/b.jpg"
      }
    ]
  }
}
