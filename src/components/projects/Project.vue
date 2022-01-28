<template>
  <div class="project">

    <!-- Header -->
    <div class="header">
      <span class="circle red"></span>
      <span class="circle orange"></span>
      <span class="circle green"></span>
      <h3>{{ project.name }}</h3>
    </div>

    <!-- Screenshot / Image -->
    <img :src="require(`@/assets/images/${project.image}.png`)" :alt="`${project.image}-screenshot`">

    <!-- Description and Tech -->
    <div class="description">
      {{ project.description }} 
      <br> 
      <span class="tech">Made using {{ project.tech }}</span>
    </div>

    <!-- Footer -->
    <div class="footer">

      <!-- Code -->
      <a :href="`${project.github}`" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/icons/code.png" alt="See code" />
      </a>

      <!-- Link -->
      <a v-show="project.url" :href="`${project.url}`" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/icons/live.png" alt="See app" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: { project: Object }
}
</script>

<style scoped>
.project {
  width: 400px;
  height: auto;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  border-radius: 15px;
}

.header {
  padding: 5px 9px;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.circle {
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 2px;
}

.red {
  background-color: rgb(255, 96, 92);
}

.orange {
  background-color: rgb(255, 189, 68);
}

.green {
  background-color: rgb(0, 202, 78);
  margin-right: 12px;
}

img {
  width: 100%;
}

.description {
  margin: 10px;
  font-size: .9rem;
}

.description .tech {
  font-size: 0.8rem;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px 0 10px;
}

.footer img {
  height: 2rem;
  width: auto;
}

.footer img:hover {
  cursor: pointer;
}
</style>