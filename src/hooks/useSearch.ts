import { ref } from 'vue'
import { searchApi } from '../services/api'
import type { SearchParams } from '../types'

export function useSearch() {
  const searchQuery = ref('')
  const isSearching = ref(false)
  const searchError = ref('')
  const searchResults = ref<any[]>([])

  const handleSearch = async () => {
    if (!searchQuery.value) return
    isSearching.value = true
    searchError.value = ''
    try {
      const result = await searchApi.search({ query: searchQuery.value })
      searchResults.value = result.items
    } catch (error) {
      console.error('搜索失败：', error)
      searchError.value = '搜索失败，请稍后重试'
    } finally {
      isSearching.value = false
    }
  }

  return {
    searchQuery,
    isSearching,
    searchError,
    searchResults,
    handleSearch,
  }
}
