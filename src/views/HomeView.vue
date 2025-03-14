<template>
    <main class="home-container">
        <div class="hero-section">
            <h1 class="title">欢迎使用工具集合</h1>
            <p class="subtitle">高效工具助力日常工作</p>
            <div class="search-box">
                <input type="text" v-model="searchQuery" placeholder="搜索工具..." class="search-input"
                    @input="handleSearch">
            </div>
            <div class="cta-buttons">
                <router-link to="/tools" class="cta-button">开始使用</router-link>
                <router-link to="/about" class="cta-button outline">了解更多</router-link>
            </div>
        </div>
        <div class="featured-tools">
            <h2 class="section-title">热门工具</h2>
            <div class="tools-grid">
                <div v-for="tool in featuredTools" :key="tool.id" class="tool-card" @click="navigateToTool(tool.route)">
                    <div class="tool-icon">{{ tool.icon }}</div>
                    <h3 class="tool-name">{{ tool.name }}</h3>
                    <p class="tool-description">{{ tool.description }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

const featuredTools = ref([
    {
        id: 1,
        name: '待办事项',
        description: '管理你的日常任务和待办事项',
        icon: '📝',
        route: '/tools/todo'
    },
    {
        id: 2,
        name: '笔记本',
        description: '记录你的想法和灵感',
        icon: '📒',
        route: '/tools/notes'
    }
])

const handleSearch = () => {
    // 实现搜索逻辑
    console.log('Searching for:', searchQuery.value)
}

const navigateToTool = (route: string) => {
    router.push(route)
}
</script>

<style scoped>
.home-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.hero-section {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
}

.search-box {
    margin-bottom: 2rem;
}

.search-input {
    width: 80%;
    max-width: 500px;
    padding: 0.8rem 1.5rem;
    border: 2px solid #e0e0e0;
    border-radius: 2rem;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.search-input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
}

.cta-button {
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

.outline {
    background-color: transparent;
    border: 2px solid #3498db;
    color: #3498db;
}

.featured-tools {
    margin-top: 4rem;
}

.section-title {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 2rem;
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 1rem;
}

.tool-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.tool-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.tool-name {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.tool-description {
    color: #7f8c8d;
    font-size: 0.9rem;
}
</style>