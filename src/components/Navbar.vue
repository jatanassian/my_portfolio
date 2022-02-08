<template>
  <div class="navbar">
    <button>Contact me</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar'

}
</script>

<style scoped>
.navbar {
  padding: .7rem;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

@media (max-width: 500px) {
  button { display: none; }
}
</style>