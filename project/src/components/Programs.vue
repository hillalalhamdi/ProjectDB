<template>
  <section id="programs" class="programs">
    <div class="container">
      <div class="section-header">
        <h2>Our Programs</h2>
        <p>Discover courses designed to advance your career and unlock new opportunities</p>
      </div>
      <div class="programs-grid">
        <div v-for="program in programs" :key="program.id" class="program-card">
          <div class="card-icon">
            <i :class="program.icon"></i>
          </div>
          <h3>{{ program.title }}</h3>
          <p>{{ program.description }}</p>
          <div class="card-meta">
            <span class="course-count">{{ program.courses }} courses</span>
            <span class="duration">{{ program.duration }}</span>
          </div>
          <button class="card-button">Explore Program</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const programs = ref([
  {
    id: 1,
    title: 'Web Development',
    description: 'Master modern web technologies including HTML, CSS, JavaScript, and popular frameworks like React and Vue.js.',
    icon: 'fas fa-laptop-code',
    courses: 25,
    duration: '6-12 months'
  },
  {
    id: 2,
    title: 'Data Science',
    description: 'Learn data analysis, machine learning, and statistical modeling to extract insights from complex datasets.',
    icon: 'fas fa-chart-line',
    courses: 18,
    duration: '8-14 months'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Develop expertise in SEO, social media marketing, content strategy, and digital advertising.',
    icon: 'fas fa-bullhorn',
    courses: 22,
    duration: '4-8 months'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Create beautiful and functional user interfaces with design thinking and user experience principles.',
    icon: 'fas fa-paint-brush',
    courses: 15,
    duration: '5-10 months'
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Protect digital assets and learn ethical hacking, network security, and threat assessment.',
    icon: 'fas fa-shield-alt',
    courses: 20,
    duration: '6-12 months'
  },
  {
    id: 6,
    title: 'Cloud Computing',
    description: 'Master cloud platforms like AWS, Azure, and Google Cloud with hands-on deployment experience.',
    icon: 'fas fa-cloud',
    courses: 16,
    duration: '4-9 months'
  }
])
</script>

<style scoped>
.programs {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.program-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.program-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.card-icon i {
  font-size: 2rem;
  color: white;
}

.program-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.program-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

.course-count, .duration {
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 500;
}

.card-button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.card-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2rem;
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }

  .program-card {
    padding: 1.5rem;
  }
}
</style>