<template>
  <Navbar />
  <HeroSection />
  <About />
  <Projects />
  <Contact />
  <Footer />
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    Navbar,
    About,
    Projects,
    Contact,
    Footer,
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
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f8f8ff;
}

.grow {
  transition: all .4s ease-in-out;
}

.grow:hover {
  transform: scale(1.2);
}

.grow:active {
  transform: scale(1.05);
}
</style>
