# taro-react-native
# 注意：@tarojs/cli 最新版本还未发布，体验版在标签 beta 下
$ yarn global add @tarojs/cli@beta

# 创建并初始化 Taro 项目，框架需选择 React
$ taro init <projectName>

# 以上可用 `npx @tarojs/cli@beta init <projectName>` 代替

# 进入初始化目录
$ cd <projectName>

# 设置环境变量DEVTAG，首次使用会安装体验版相关依赖，需要等待一段时间
# windows 设置环境变量为 `export DEVTAG=@beta`
# 支持 --port 选项手动指定端口
$ DEVTAG=@beta yarn dev:rn --port 8081

# bundler 启动成功会显示如下信息
# React-Native Dev server is running on port: 8081
