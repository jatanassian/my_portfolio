<template>
  <div class="text">
    <h1>Julien Atanassian</h1>
    <h2>Full Stack Web Developer</h2>
    <div class="socials">
      <a href="https://github.com/jatanassian" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/github.png" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/julien-atanassian/" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/linkedin-logo.png" alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/jatanassian" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/twitter.png" alt="Twitter" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

h1 {
  font-size: 70px;
}

h2 {
  font-size: 40px;
}

.socials {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 2rem;
  margin: 0 1rem;
}

img:hover {
  cursor: pointer;
}
</style>
