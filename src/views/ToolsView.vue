<template>
  <div class="tools-container">
    <h1 class="tools-title">实用工具集</h1>
    <div class="tools-grid">
      <div v-for="tool in tools" :key="tool.id" class="tool-card" @click="navigateToTool(tool.route)">
        <div class="tool-icon">
          {{ tool.icon }}
        </div>
        <h3 class="tool-name">{{ tool.name }}</h3>
        <p class="tool-description">{{ tool.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tools = ref([
  {
    id: 1,
    name: '天气查询',
    description: '实时查看全球城市天气信息',
    icon: '🌤️',
    route: '/tools/weather'
  },
  {
    id: 2,
    name: '待办事项',
    description: '管理你的日常任务和待办事项',
    icon: '📝',
    route: '/tools/todo'
  },
  {
    id: 3,
    name: '笔记本',
    description: '记录你的想法和灵感',
    icon: '📒',
    route: '/tools/notes'
  },
  {
    id: 4,
    name: '计算器',
    description: '简单的数学计算工具',
    icon: '🔢',
    route: '/tools/calculator'
  }
])

const navigateToTool = (route: string) => {
  router.push(route)
}
</script>

<style scoped>
.tools-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.tools-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2.5rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.tool-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.tool-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #3498db;
}

.tool-name {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.tool-description {
  color: #7f8c8d;
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .tools-container {
    padding: 1rem;
  }

  .tools-title {
    font-size: 2rem;
  }

  .tool-card {
    padding: 1.5rem;
  }

  .tool-icon {
    font-size: 2.5rem;
  }

  .tool-name {
    font-size: 1.3rem;
  }
}
</style>