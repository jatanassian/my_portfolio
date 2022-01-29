<template>
  <section class="about">
    <h2>About me</h2>
    
    <div>Hi, I'm a full stack web developer with a background in marketing based in Ottawa.</div>

    <div>I enjoy the never ending learning journey that is web development. I also like solving problems and being part of a community. Member of Ottawa JavaScript, Ottawa Ruby & React Ottawa.</div>

    <div class="tech">
      <div class="tech-column">
        <strong>Languages:</strong>
        <span v-for="lang in languages" :key="lang">{{ lang }}</span>
      </div>
      <div class="tech-column">
        <strong>Libraries:</strong>
        <span v-for="lib in libraries" :key="lib">{{ lib }}</span>
      </div>
      <div class="tech-column">
        <strong>Database & Systems:</strong>
        <span v-for="syst in systems" :key="syst">{{ syst }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'Ruby'],
      libraries: ['Vue.js', 'Node.js', 'React', 'GraphQL', 'Mocha & Chai', 'Jest'],
      systems: ['Git', 'SQL', 'PostgreSQL', 'Google Cloud Platform'],
    }
  }
}
</script>

<style scoped>
.about {
  margin: 0 5rem;
  padding: 3rem 0;
  border-top: solid 1px #ffffff;
  border-bottom: solid 1px #ffffff;
}

h2 {
  font-size: 40px;
}

.tech {
  /* display: flex; */
  margin-top: 30px;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: auto;
}

.tech-column {
  display: flex;
  flex-direction: column;
}
</style>