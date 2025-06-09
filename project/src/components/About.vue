<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2>About EduTech</h2>
        <p>Empowering learners worldwide with cutting-edge online education</p>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h3>Our Mission</h3>
          <p>
            At EduTech, we believe that quality education should be accessible to everyone, everywhere. 
            Our mission is to democratize learning by providing world-class online courses that help 
            individuals and organizations achieve their goals.
          </p>
          <h3>Why Choose Us?</h3>
          <ul class="feature-list">
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Industry-leading instructors with real-world experience</span>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Interactive learning experiences with hands-on projects</span>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Flexible schedules that fit your lifestyle</span>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Certification programs recognized by top employers</span>
            </li>
          </ul>
        </div>
        <div class="about-image">
          <div class="image-placeholder">
            <i class="fas fa-graduation-cap"></i>
            <h4>Excellence in Education</h4>
            <p>Join thousands of students who have transformed their careers with EduTech</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>

<style scoped>
.about {
  padding: 5rem 0;
  background: #f8fafc;
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.about-text p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  margin-top: 1.5rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #666;
}

.feature-list i {
  color: #667eea;
  font-size: 1.1rem;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: white;
  width: 100%;
  max-width: 400px;
}

.image-placeholder i {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.image-placeholder h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.image-placeholder p {
  opacity: 0.9;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .image-placeholder {
    padding: 2rem;
  }
}
</style>