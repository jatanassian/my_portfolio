<template>
  <section class="about">
    <h2>About me</h2>
    
    <p>Hi, I'm a full stack web developer with a background in marketing based in Ottawa.</p>

    <p>I enjoy the never ending learning journey that is web development. I also like solving problems and being part of a community.</p>

    <div class="tech">
      <ul class="tech-column">
        <li><strong>Languages:</strong></li>
        <li v-for="lang in languages" :key="lang">{{ lang }}</li>
      </ul>
      <ul class="tech-column">
        <li><strong>Libraries:</strong></li>
        <li v-for="lib in libraries" :key="lib">{{ lib }}</li>
      </ul>
      <ul class="tech-column">
        <li><strong>Database & Systems:</strong></li>
        <li v-for="syst in systems" :key="syst">{{ syst }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'Ruby'],
      libraries: ['Vue.js', 'Node.js', 'Express', 'React', 'GraphQL', 'Mocha & Chai', 'Jest'],
      systems: ['Git', 'SQL', 'PostgreSQL', 'Google Cloud Platform'],
    }
  }
}
</script>

<style scoped>
.about {
  margin: 0 2rem;
  padding: 3rem 0;
  border-top: solid 1px #ffffff;
  border-bottom: solid 1px #ffffff;
}

h2 {
  font-size: 30px;
  margin-bottom: 2rem;
  text-align: center;
}

.tech {
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: auto;
}

.tech-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

li {
  list-style-type: none;
}

@media (min-width: 500px) {
  .about { margin: 0 3rem; }
  .tech  { 
    grid-template-columns: repeat(2, 200px);
    justify-content: center;
  }
}

@media (min-width: 650px) {
  h2 { text-align: left; }
}

@media (min-width: 700px) {
  .about { margin: 0 5rem; }
  h2 { font-size: 40px; }
  .tech  { 
    grid-template-columns: repeat(3, 200px);
    justify-content: start;
  }
  .tech-column { align-items: start; }
}
</style>