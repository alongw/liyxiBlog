import axios from 'axios'
const axiosw = axios.create({
  baseURL: process.env.VUE_APP_Backend_BaseUrl
})
// http request 拦截器
axiosw.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      // 判断token是否存在
      config.headers.Authorization = 'Bearer ' + token // 将token设置成请求头
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axiosw.interceptors.response.use(
  (config) => {
    // 身份认证失败，跳转登录
    if (config.data.status == 4003) {
      // 清除已过期的 token
      try {
        localStorage.removeItem('token')
      } catch {}
      router.push('/login')
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default axiosw
