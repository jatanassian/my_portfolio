<template>
  <a href="mailto:julien.atanassian@gmail.com">Contact me</a>
</template>

<script>
export default {
  name: 'ContactButton'
}
</script>

<style scoped>
a {
  text-decoration: none;
  background-color: #42b983;
  font-size: 1rem;
  color: white;
  padding: .7rem 1.3rem;
  border-radius: 30px;
  font-weight: bold;
  transition: background-color .4s ease-in-out;
}

a:hover {
  cursor: pointer;
  background-color: #3ba575;
}

a:active {
  background-color: #41b480;
  transform: scale(0.98);
}
</style>