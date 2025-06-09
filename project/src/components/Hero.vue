<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Transform Your Future with 
          <span class="gradient-text">Online Learning</span>
        </h1>
        <p class="hero-subtitle">
          Unlock your potential with our comprehensive online courses. 
          Learn from industry experts, gain practical skills, and advance your career from anywhere in the world.
        </p>
        <div class="hero-buttons">
          <button class="btn-primary">Start Learning Today</button>
          <button class="btn-secondary">Explore Courses</button>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <h3>10,000+</h3>
            <p>Students Enrolled</p>
          </div>
          <div class="stat">
            <h3>500+</h3>
            <p>Expert Instructors</p>
          </div>
          <div class="stat">
            <h3>50+</h3>
            <p>Course Categories</p>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <div class="floating-card card-1">
          <i class="fas fa-laptop-code"></i>
          <span>Web Development</span>
        </div>
        <div class="floating-card card-2">
          <i class="fas fa-chart-line"></i>
          <span>Data Science</span>
        </div>
        <div class="floating-card card-3">
          <i class="fas fa-paint-brush"></i>
          <span>Design</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(45deg, #f093fb, #f5576c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(45deg, #f093fb, #f5576c);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(240, 147, 251, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat p {
  opacity: 0.8;
  font-size: 0.9rem;
}

.hero-image {
  position: relative;
  height: 500px;
}

.hero-illustration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.gradient-circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3));
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 500;
  animation: float 4s ease-in-out infinite;
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 60%;
  right: 10%;
  animation-delay: 1s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 2s;
}

.floating-card i {
  font-size: 1.2rem;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-image {
    height: 300px;
  }

  .gradient-circle {
    width: 200px;
    height: 200px;
  }
}
</style>