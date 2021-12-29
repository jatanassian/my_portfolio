<template>
  <Navbar />
  <HeroSection />
  <About />
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    Navbar,
    About,
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(12,20,69,1) 0%, rgba(56,40,92,1) 90%, rgba(76,64,142,1) 100%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f8f8ff;
}
</style>
