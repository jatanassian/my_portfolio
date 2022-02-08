<template>
  <header class="text">
    <h1>Julien Atanassian</h1>
    <h2>Full Stack Web Developer</h2>
    <div class="socials">
      <a href="https://github.com/jatanassian" target="_blank" rel="noreferrer noopener" class="grow">
        <img src="@/assets/icons/github.png" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/julien-atanassian/" target="_blank" rel="noreferrer noopener" class="grow">
        <img src="@/assets/icons/linkedin-logo.png" alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/jatanassian" target="_blank" rel="noreferrer noopener" class="grow">
        <img src="@/assets/icons/twitter.png" alt="Twitter" />
      </a>
    </div>
    <button>Contact me</button>
  </header>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

h1 {
  font-size: 35px;
}

h2 {
  font-size: 18px;
  font-weight: normal;
}

a {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

.socials {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 2rem;
}

img:hover {
  cursor: pointer;
}

button {
  background-color: #42b983;
  font-size: 1rem;
  color: white;
  border: none;
  padding: .7rem 1.3rem;
  border-radius: 30px;
  font-weight: bold;
  transition: background-color .4s ease-in-out;
}

button:hover {
  cursor: pointer;
  background-color: #3ba575;
}

button:active {
  background-color: #41b480;
  transform: scale(0.98);
}

@media (min-width: 400px) {
  h1 { font-size: 50px;}
  h2 { font-size: 25px;}
}
@media (min-width: 500px) {
  button { display: none; }
}

@media (min-width: 750px) {
  h1 { font-size: 70px;}
  h2 { font-size: 40px;}
}
</style>
