<template>
    <div class="weather-container">
        <div class="search-box">
            <input v-model="city" @keyup.enter="getWeather" type="text" placeholder="输入城市名称" class="search-input" />
            <button @click="getWeather" class="search-button">查询</button>
        </div>

        <div v-if="loading" class="loading">
            <div class="spinner"></div>
            <p>加载中...</p>
        </div>

        <div v-else-if="error" class="error-message">
            {{ error }}
        </div>

        <div v-else-if="weather" class="weather-info">
            <div class="weather-main">
                <h2>{{ weather.name }}</h2>
                <div class="temperature">
                    {{ Math.round(weather.main.temp) }}°C
                </div>
                <div class="weather-description">
                    {{ weather.weather[0].description }}
                </div>
            </div>

            <div class="weather-details">
                <div class="detail-item">
                    <span class="label">湿度</span>
                    <span class="value">{{ weather.main.humidity }}%</span>
                </div>
                <div class="detail-item">
                    <span class="label">风速</span>
                    <span class="value">{{ weather.wind.speed }} m/s</span>
                </div>
                <div class="detail-item">
                    <span class="label">气压</span>
                    <span class="value">{{ weather.main.pressure }} hPa</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { get } from '@/until/axios'

const city = ref('')
const weather = ref<any>(null)
const loading = ref(false)
const error = ref('')

const getWeather = async () => {
    if (!city.value) {
        error.value = '请输入城市名称'
        return
    }

    loading.value = true
    error.value = ''
    weather.value = null

    try {
        // 首先通过地理编码API获取城市的经纬度
        const geoResponse = await get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.value)}&count=1&language=zh`)

        if (!geoResponse.results || geoResponse.results.length === 0) {
            throw new Error('未找到该城市')
        }

        const location = geoResponse.results[0]

        // 使用经纬度获取天气数据
        const weatherResponse = await get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,surface_pressure&timezone=auto`)

        weather.value = {
            name: location.name,
            main: {
                temp: weatherResponse.current.temperature_2m,
                humidity: weatherResponse.current.relative_humidity_2m,
                pressure: weatherResponse.current.surface_pressure
            },
            wind: {
                speed: weatherResponse.current.wind_speed_10m
            },
            weather: [{
                description: `${location.name}天气：温度${weatherResponse.current.temperature_2m}°C，湿度${weatherResponse.current.relative_humidity_2m}%，风速${weatherResponse.current.wind_speed_10m}m/s`
            }]
        }
    } catch (e) {
        if (e.message === '未找到该城市') {
            error.value = '未找到该城市，请检查城市名称是否正确'
        } else {
            error.value = '获取天气信息失败，请稍后重试'
            console.error('Weather API Error:', e)
        }
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.weather-container {
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
}

.search-box {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.search-input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.search-input:focus {
    outline: none;
    border-color: #3498db;
}

.search-button {
    padding: 0.8rem 1.5rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.search-button:hover {
    background-color: #2980b9;
}

.loading {
    text-align: center;
    padding: 2rem;
}

.spinner {
    width: 40px;
    height: 40px;
    margin: 0 auto 1rem;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.error-message {
    color: #e74c3c;
    text-align: center;
    padding: 1rem;
    background-color: #fdf2f2;
    border-radius: 8px;
}

.weather-info {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.weather-main {
    text-align: center;
    margin-bottom: 2rem;
}

.weather-main h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.temperature {
    font-size: 3rem;
    font-weight: bold;
    color: #3498db;
    margin-bottom: 0.5rem;
}

.weather-description {
    color: #7f8c8d;
    font-size: 1.2rem;
}

.weather-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
}

.detail-item {
    text-align: center;
}

.label {
    display: block;
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.value {
    font-size: 1.2rem;
    color: #2c3e50;
    font-weight: 500;
}

@media (max-width: 768px) {
    .weather-container {
        padding: 1rem;
    }

    .weather-details {
        grid-template-columns: 1fr;
    }
}
</style>@/until/axios.js=