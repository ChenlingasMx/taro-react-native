import Taro from "@tarojs/taro";

export const baseUrl = ''
// 显示加载框
export const showLoad = (text = "加载中...") => {
  if (text && typeof text === "string") {
    Taro.showLoading({
      title: text,
      mask: true,
    });
  }
};

// 隐藏加载框
export const hideLoad = () => Taro.hideLoading();

// 提示 可单独导入
export const msg = (text) => {
  if (text && typeof text === "string") {
    Taro.showToast({
      title: text,
      icon: "none",
      duration: 1500,
    });
  }
};
