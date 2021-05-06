# taro-react-native
taro编译react-native,需提前配置好ios环境,可参考react-native官方文档进行配置
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

