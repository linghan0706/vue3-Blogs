<template>
  <div class="about-container">
    <div class="about-content">
      <h1 class="about-title">关于网页</h1>
      <div class="about-card">
        <div class="profile-section">
          <div class="profile-image">
            <img src="/profile-placeholder.svg" alt="Profile" />
          </div>
          <h2 class="profile-name">个人工具集</h2>
          <p class="profile-title">让生活更简单，工作更高效</p>
        </div>
        <div class="description-section">
          <h3>项目简介</h3>
          <p>这是一个集成了多种实用工具的个人网站，旨在提供便捷的日常工具服务。无论是任务管理、笔记记录还是快速计算，我们都致力于为您提供最佳的使用体验。</p>
          <h3>我们的特色</h3>
          <ul class="features-list">
            <li>简洁直观的界面设计</li>
            <li>丰富实用的工具集合</li>
            <li>响应式布局，支持多端使用</li>
            <li>持续更新，不断优化</li>
          </ul>
          <h3>联系我们</h3>
          <div class="contact-info">
            <p>如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：</p>
            <div class="contact-methods">
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span>邮箱：3176820167@qq.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-title {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
}

.about-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 3px;
}

.about-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.profile-section {
  text-align: center;
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 2px solid #f0f2f5;
}

.profile-image {
  width: 140px;
  height: 140px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(52, 152, 219, 0.2);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.profile-image:hover img {
  filter: brightness(1.1);
}

.profile-name {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.profile-title {
  color: #7f8c8d;
  font-size: 1.2rem;
  font-weight: 500;
}

.description-section h3 {
  color: #2c3e50;
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  padding-left: 1rem;
}

.description-section h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background: #3498db;
  border-radius: 2px;
}

.description-section p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.features-list li {
  margin: 0.5rem 0;
  padding: 1rem;
  position: relative;
  color: #666;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.features-list li:hover {
  transform: translateX(5px);
  background-color: #edf2f7;
}

.features-list li::before {
  content: "✓";
  position: absolute;
  left: 0.5rem;
  color: #3498db;
  font-weight: bold;
}

.contact-info {
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.contact-methods {
  margin-top: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-icon {
  font-size: 1.8rem;
  margin-right: 1.2rem;
  color: #3498db;
}

@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
    min-height: auto;
  }

  .about-title {
    font-size: 2rem;
  }

  .about-card {
    padding: 1.5rem;
  }

  .profile-image {
    width: 120px;
    height: 120px;
  }

  .profile-name {
    font-size: 1.8rem;
  }

  .description-section h3 {
    font-size: 1.3rem;
  }

  .features-list {
    grid-template-columns: 1fr;
  }

  .contact-item {
    padding: 0.8rem;
  }

  .contact-icon {
    font-size: 1.5rem;
  }
}
</style>