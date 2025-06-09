<template>
  <div class="app">
    <Navigation />
    <main>
      <Hero />
      <About />
      <Programs />
      <Benefits />
      <Contact />
    </main>
    <Copywriting />
  </div>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Programs from './components/Programs.vue'
import Benefits from './components/Benefits.vue'
import Contact from './components/Contact.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

.app {
  min-height: 100vh;
  position: relative;
}
</style>