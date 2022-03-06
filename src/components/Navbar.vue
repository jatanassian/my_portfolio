<template>
  <div class="navbar">
    <ContactButton class="contact-btn" />
  </div>
</template>

<script>
import ContactButton from './ui/ContactButton.vue';
export default {
  name: 'Navbar',
  components: { ContactButton }

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

@media (max-width: 500px) {
  .contact-btn { display: none; }
}
</style>