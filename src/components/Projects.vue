<template>
  <section class="projects">
    <h2>Projects</h2>
    <Project />
  </section>
</template>

<script>
import Project from './projects/Project.vue'
export default {
  name: 'Projects',
  components: {
    Project,
  }
}
</script>

<style scoped>
.projects {
  margin: 0 5rem;
  padding: 3rem 0;
  border-top: solid 1px #ffffff;
  border-bottom: solid 1px #ffffff;
}

h2 {
  font-size: 40px;
}

.projects-list {
  display: grid;

}
</style>