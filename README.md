# taro-react-native
taro可同时编译h5,小程序,react-native,编译rn需提前配置好ios和android环境,可参考react-native官方文档进行配置
```bash
# 下载依赖
yarn install
# 编译rn
yarn dev:rn
# 下载ios依赖
cd taro-native-shell
yarn install
# 启动ios
cd ios
# 下载ios依赖
pod install
# 启动项目
yarn run ios
```

