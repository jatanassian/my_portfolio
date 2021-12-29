<template>
  <div class="navbar">
    <span class="item">About</span>
    <span class="item">Projects</span>
    <button class="item">Contact</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar'

}
</script>

<style scoped>
.navbar {
  padding: .5rem;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.item {
  margin: 0 1rem;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: .7rem 1.3rem;
  border-radius: 30px;
  font-weight: bold;
}

button:hover {
  cursor: pointer;
}
</style>