import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送前可以进行一些处理，例如添加token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error('请求错误：', error)
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 直接返回响应数据，因为Open-Meteo API返回的数据结构较简单
    return response.data
  },
  (error) => {
    console.error('响应错误：', error)
    return Promise.reject(error)
  },
)

// 封装GET请求
export const get = <T = any>(url: string, params?: any): Promise<T> => {
  return service({
    method: 'get',
    url,
    params,
  })
}

// 封装POST请求
export const post = <T = any>(url: string, data?: any): Promise<T> => {
  return service({
    method: 'post',
    url,
    data,
  })
}

// 封装PUT请求
export const put = <T = any>(url: string, data?: any): Promise<T> => {
  return service({
    method: 'put',
    url,
    data,
  })
}

// 封装DELETE请求
export const del = <T = any>(url: string, params?: any): Promise<T> => {
  return service({
    method: 'delete',
    url,
    params,
  })
}

// 导出axios实例
export default service
