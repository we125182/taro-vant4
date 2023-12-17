import Taro from '@tarojs/taro'

export function showToast(title: string) {
  Taro.showToast({
    title,
    icon: 'none',
  })
}

export const closeToast = Taro.hideToast

export const closeLoading = Taro.hideLoading

export const showLoadingToast = (title?: string) => {
  Taro.showLoading( title ?{
    title,
  } : undefined)
}

export function showFailToast(title: string) {
  Taro.showToast({
    title,
    icon: 'error',
  })
}

export function showSuccessToast(title: string) {
  Taro.showToast({
    title,
    icon: 'success',
  })
}

export const showConfirmDialog = (options: { title: string, message?: string }) => {
  return Taro.showModal({
    title: options.title,
    content: options.message,
  })
}
