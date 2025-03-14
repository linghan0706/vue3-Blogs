import { get, post } from '../until/axios'
import type { SearchParams, SearchResult, WeatherParams, WeatherData } from '../types'

// 天气相关API
export const weatherApi = {
  // 获取天气信息
  getWeather: (params: WeatherParams) => {
    return get('/weather', params)
  },
}

// 搜索相关API
export const searchApi = {
  // 搜索内容
  search: (params: SearchParams) => {
    return get<SearchResult<any>>('/api/search', params)
  },
}
