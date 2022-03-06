<template>
  <section>
    <h2>Get in touch</h2>
    <p>I'm always open to new opportunities and projects, don't hesitate to contact me.</p>
    <ContactButton />
  </section>
</template>

<script>
import ContactButton from './ui/ContactButton.vue';

export default {
  name: 'Contact',
  components: { ContactButton }
}
</script>

<style scoped>
section {
  margin: 0 5rem;
  padding: 3rem 0;
  border-top: solid 1px #ffffff;
  text-align: center;
}

h2 {
  font-size: 40px;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 2rem;
}
</style>