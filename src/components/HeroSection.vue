<template>
  <header class="text">
    <h1>Julien Atanassian</h1>
    <h2>Full Stack Web Developer</h2>
    <div class="socials">
      <a
        href="https://github.com/jatanassian"
        target="_blank"
        rel="noreferrer noopener"
        class="grow"
      >
        <img src="@/assets/icons/github.png" alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/julien-atanassian/"
        target="_blank"
        rel="noreferrer noopener"
        class="grow"
      >
        <img src="@/assets/icons/linkedin-logo.png" alt="LinkedIn" />
      </a>
      <!-- <a
        href="https://twitter.com/jatanassian"
        target="_blank"
        rel="noreferrer noopener"
        class="grow"
      >
        <img src="@/assets/icons/twitter.png" alt="Twitter" />
      </a> -->
      <a
        href="https://resume.creddle.io/resume/emm9svs875o"
        target="_blank"
        rel="noreferrer noopener"
        class="grow"
      >
        <img src="@/assets/icons/cv.png" alt="Resume" />
      </a>
    </div>
    <ContactButton class="contact-btn" />
  </header>
</template>

<script>
import ContactButton from "./ui/ContactButton.vue";

export default {
  name: "HeroSection",
  components: { ContactButton },
};
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

@media (min-width: 400px) {
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 25px;
  }
}
@media (min-width: 501px) {
  .contact-btn {
    display: none;
  }
}

@media (min-width: 750px) {
  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 40px;
  }
}
</style>
