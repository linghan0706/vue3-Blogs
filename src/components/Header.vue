<template>
    <div class="responsive-layout">
        <header class="header">
            <div class="search-bar">
                <input type="text" placeholder="搜索内容" v-model="searchQuery" @focus="removeDefaultFocusStyle"
                    @keyup.enter="handleSearch" />
                <div class="search" @click="handleSearch">
                    <svg t="1741933037218" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4951" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M688.4 420.6c0-71.2-27.7-138.2-78.1-188.5C560 181.7 493 154 421.8 154c-2.7 0-5.4 0.1-8.1 0.1-29.6 14.1-57.3 33.3-81.8 57.8-115.2 115.2-115.2 302.1 0 417.3 24.7 24.7 52.6 44 82.5 58.2 70.7 2 141.9-24.3 196-78.3 50.3-50.4 78-117.3 78-188.5z"
                            fill="#91B4FF" p-id="4952"></path>
                        <path
                            d="M421.4 744.5c-78.4 0-156.8-28.5-219.1-85.8-11.6-10.7-12.3-28.7-1.6-40.2 10.7-11.6 28.7-12.3 40.2-1.6 105.5 97.2 267.6 93.8 369.1-7.7 50.4-50.4 78.1-117.3 78.1-188.5S660.4 282.5 610 232.2 492.7 154 421.5 154 283.3 181.7 233 232.1c-56 56-84.1 133.4-77 212.4 1.4 15.7-10.2 29.5-25.8 30.9-15.6 1.3-29.5-10.2-30.9-25.8-8.6-95.8 25.5-189.8 93.5-257.7 126.2-126.2 331.4-126.2 457.6 0 126.2 126.2 126.2 331.4 0 457.6-63.4 63.2-146.2 95-229 95z"
                            fill="#3778FF" p-id="4953"></path>
                        <path
                            d="M169.3 601.8c-9.6 0-19-4.9-24.4-13.7-4.6-7.5-8.8-15.2-12.7-23-5.1-10.1-9.6-20.7-13.6-31.4-5.5-14.7 2-31.1 16.7-36.6s31.1 2 36.6 16.7c3.3 8.8 7 17.4 11.2 25.8 3.2 6.4 6.7 12.7 10.4 18.9 8.2 13.4 3.9 31-9.6 39.1-4.5 2.9-9.6 4.2-14.6 4.2zM913.1 911.9c-15.3 15.3-40.4 15.3-55.7 0l-261-261c-0.4-0.4-0.4-1 0-1.4l54.3-54.3c0.4-0.4 1-0.4 1.4 0l261 261c15.4 15.3 15.4 40.4 0 55.7z"
                            fill="#3778FF" p-id="4954"></path>
                    </svg>
                </div>
            </div>
            <div v-if="searchError" class="search-error">{{ searchError }}</div>
            <div v-if="isSearching" class="search-loading">搜索中...</div>

            <nav class="nav">
                <ul class="nav-list">
                    <li><router-link to="/" class="nav-link">首页</router-link></li>
                    <li><router-link to="/tools" class="nav-link">工具</router-link></li>
                    <li><router-link to="/about" class="nav-link">关于</router-link></li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="cards">
                <div class="card" v-for="(item, index) in cards" :key="index" @mouseover="item.isHovered = true"
                    @mouseleave="item.isHovered = false">
                    <h2>{{ item.title }}</h2>
                    <p class="description">{{ item.description }}</p>
                    <div class="tools-list">
                        <a v-for="tool in item.tools" :key="tool.name" class="tool-link"
                            @click.prevent="openUrl(tool.url)" :title="tool.name">
                            {{ tool.name }}
                        </a>
                    </div>
                    <div class="placeholder"
                        :style="{ backgroundColor: item.isHovered ? item.hoverColor : item.color }"></div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSearch } from '../hooks/useSearch'

const { searchQuery, isSearching, searchError, searchResults, handleSearch } = useSearch()
const cards = ref([
    {
        title: '在线工具',
        description: '常用的在线工具集合',
        tools: [
            { name: '图片压缩', url: 'https://tinypng.com/' },
            { name: '在线PS', url: 'https://www.photopea.com/' },
            { name: '文件转换', url: 'https://convertio.co/zh/' }
        ],
        color: '#e3f2fd',
        hoverColor: '#bbdefb',
        isHovered: false
    },
    {
        title: '开发工具',
        description: '提高开发效率的工具',
        tools: [
            { name: '正则测试', url: 'https://regex101.com/' },
            { name: 'JSON格式化', url: 'https://jsoneditoronline.org/' },
            { name: '代码对比', url: 'https://www.diffchecker.com/' },
            { name: "Sql服务", url: "https://www.sqlpub.com/" }
        ],
        color: '#f3e5f5',
        hoverColor: '#e1bee7',
        isHovered: false
    },
    {
        title: '设计资源',
        description: '优质的设计资源网站',
        tools: [
            { name: '阿里图标库', url: 'https://www.iconfont.cn/' },
            { name: '即时设计', url: 'https://js.design/' },
            { name: 'UI灵感', url: 'https://dribbble.com/' }
        ],
        color: '#e8f5e9',
        hoverColor: '#c8e6c9',
        isHovered: false
    }
])

const openUrl = (url: string) => {
    window.open(url, '_blank')
}

const removeDefaultFocusStyle = (event: Event) => {
    const target = event.target as HTMLElement
    target.style.outline = 'none'
}
</script>

<style scoped>
.responsive-layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

.search-bar {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    width: 300px;
}

.search-bar input {
    border: none;
    background: none;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
}

.search-bar .search {
    cursor: pointer;
}

.search-bar .icon {
    width: 24px;
    height: 24px;
}

.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
    color: #3778FF;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
}

.card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.card h2 {
    margin: 0 0 0.5rem 0;
    color: #2c3e50;
}

.description {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.tools-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tool-link {
    background-color: #f8f9fa;
    color: #3778FF;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: pointer;
}

.tool-link:hover {
    background-color: #3778FF;
    color: white;
}

.placeholder {
    width: 100%;
    height: 150px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        gap: 1rem;
    }

    .search-bar {
        width: 100%;
    }

    .nav-list {
        gap: 1rem;
    }
}
</style>

.search-error {
color: #dc3545;
margin-top: 0.5rem;
font-size: 0.875rem;
}

.search-loading {
color: #6c757d;
margin-top: 0.5rem;
font-size: 0.875rem;
}