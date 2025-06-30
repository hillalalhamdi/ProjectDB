<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2>Get in Touch</h2>
        <p>Ready to start your learning journey? Contact us through any of these channels</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Let's Connect</h3>
          <p>
            We're here to help you every step of the way. Whether you have questions about our courses, 
            need technical support, or want to discuss your learning goals, our team is ready to assist.
          </p>
          <div class="contact-methods">
            <a href="https://wa.me/081339656799" class="contact-method whatsapp" target="_blank">
              <div class="method-icon">
                <i class="fab fa-whatsapp"></i>
              </div>
              <div class="method-info">
                <h4>WhatsApp</h4>
                <p>Quick support and instant answers</p>
                <span>+6281339656799</span>
              </div>
            </a>
            <a href="https://instagram.com/najibazharun" class="contact-method instagram" target="_blank">
              <div class="method-icon">
                <i class="fab fa-instagram"></i>
              </div>
              <div class="method-info">
                <h4>Instagram</h4>
                <p>Follow us for updates and tips</p>
                <span>@najibazharun</span>
              </div>
            </a>
            <a href="mailto:najwaazharun10@gmail.com" class="contact-method email">
              <div class="method-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="method-info">
                <h4>Email</h4>
                <p>Detailed inquiries and support</p>
                <span>najwaazharun10@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
        <div class="contact-form">
          <h3>Send us a Message</h3>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
              <label for="interest">Area of Interest</label>
              <select id="interest" v-model="form.interest" required>
                <option value="">Select a program</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud-computing">Cloud Computing</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="4" required></textarea>
            </div>
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  interest: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission here
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! We\'ll get back to you soon.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    interest: '',
    message: ''
  }
}
</script>

<style scoped>
.contact {
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.contact-info p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.contact-method.whatsapp {
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
}

.contact-method.instagram {
  background: linear-gradient(135deg, #e4405f, #c13584);
  color: white;
}

.contact-method.email {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.contact-method:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.method-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.method-icon i {
  font-size: 1.5rem;
}

.method-info h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.method-info p {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
}

.method-info span {
  font-weight: 500;
  font-size: 0.9rem;
}

.contact-form {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.contact-form h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-button {
  width: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>