<template>
  <section id="benefits" class="benefits">
    <div class="container">
      <div class="section-header">
        <h2>Why Choose EduTech?</h2>
        <p>Experience the advantages of learning with our innovative platform</p>
      </div>
      <div class="benefits-grid">
        <div v-for="benefit in benefits" :key="benefit.id" class="benefit-card">
          <div class="benefit-icon">
            <i :class="benefit.icon"></i>
          </div>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
      <div class="cta-section">
        <h3>Ready to Start Your Learning Journey?</h3>
        <p>Join thousands of students who have transformed their careers with EduTech</p>
        <button class="cta-button">Get Started Now</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const benefits = ref([
  {
    id: 1,
    title: 'Learn at Your Own Pace',
    description: 'Study whenever and wherever you want with our flexible scheduling and lifetime access to course materials.',
    icon: 'fas fa-clock'
  },
  {
    id: 2,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of real-world experience and proven track records.',
    icon: 'fas fa-user-graduate'
  },
  {
    id: 3,
    title: 'Hands-on Projects',
    description: 'Apply your knowledge immediately with practical projects that build your portfolio and confidence.',
    icon: 'fas fa-tools'
  },
  {
    id: 4,
    title: 'Career Support',
    description: 'Get guidance on career transitions, resume building, and job placement assistance from our career team.',
    icon: 'fas fa-briefcase'
  },
  {
    id: 5,
    title: 'Community Access',
    description: 'Connect with fellow learners, participate in discussions, and build valuable professional networks.',
    icon: 'fas fa-users'
  },
  {
    id: 6,
    title: 'Certificates',
    description: 'Earn industry-recognized certificates upon completion that you can showcase to employers.',
    icon: 'fas fa-certificate'
  }
])
</script>

<style scoped>
.benefits {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.benefit-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.benefit-icon i {
  font-size: 1.8rem;
  color: white;
}

.benefit-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.benefit-card p {
  color: #666;
  line-height: 1.6;
}

.cta-section {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  color: white;
  margin-top: 3rem;
}

.cta-section h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .benefit-card {
    padding: 1.5rem;
  }

  .cta-section {
    padding: 2rem 1rem;
  }

  .cta-section h3 {
    font-size: 1.5rem;
  }
}
</style>