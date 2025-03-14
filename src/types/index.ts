// 通用响应类型
export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

// 天气相关类型
export interface WeatherData {
  temp: number
  humidity: number
  description: string
  icon: string
}

export interface WeatherParams {
  city: string
  units?: 'metric' | 'imperial'
}

// 搜索相关类型
export interface SearchParams {
  query: string
  page?: number
  limit?: number
}

export interface SearchResult<T> {
  items: T[]
  total: number
  page: number
  limit: number
}
