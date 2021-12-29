<template>
  <div class="project">
    <div class="header">
      <span class="circle red"></span>
      <span class="circle orange"></span>
      <span class="circle green"></span>
      <span>CSS Playground</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project'
}
</script>

<style scoped>
.project {
  width: 300px;
  height: 450px;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  border-radius: 10px;
}

.header {
  padding: 5px;
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
}
</style>