<template>
  <div class="project">
    <div class="header">
      <span class="circle red"></span>
      <span class="circle orange"></span>
      <span class="circle green"></span>
      <h3>CSS Playground</h3>
    </div>
    <img src="@/assets/images/css-playground.png" alt="css-playground-screenshot">
    <div class="content">A webapp that let's you play with different CSS properties (rotate, skew...) and copy the code. <br> Made using Vue.js</div>
    <div class="footer">
      <a href="https://github.com/jatanassian" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/icons/code.png" alt="See code" />
      </a>
      <a href="https://github.com/jatanassian" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/icons/live.png" alt="See app" />
      </a>
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

.content {
  margin: 10px;
  font-size: .9rem;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.footer img {
  height: 2rem;
  width: auto;
}

.footer img:hover {
  cursor: pointer;
}
</style>