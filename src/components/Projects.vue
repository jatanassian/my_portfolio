<template>
  <section class="projects">
    <h2>Projects</h2>
    <div class="projects-container">
      <Project v-for="project in projects.slice().reverse()" :key="project.key" :project="project"/>
    </div>
  </section>
</template>

<script>
import Project from './projects/Project.vue'
export default {
  name: 'Projects',
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          key: 1,
          name: "TinyApp",
          description: "A URL shortening app with analytics.",
          tech: "Node.js, Express, EJS, bcrypt, cookie-session, Mocha, Chai",
          github: "https://github.com/jatanassian/tinyapp",
          url: null,
          image: "tinyapp"
        },
        {
          key: 2,
          name: "Tweeter",
          description: "A responsive single-page Twitter clone.",
          tech: "jQuery, CSS, AJAX, Node.js",
          github: "https://github.com/jatanassian/tweeter",
          url: null,
          image: "tweeter"
        },
        {
          key: 3,
          name: "Memo",
          description: "A web application inspired by Reddit allowing users to post content, like, rate and comment posts, create a collection of posts and review all their activity.",
          tech: "EJS, jQuery, Node.js, AJAX, SASS/SCSS, PostgreSQL",
          github: "https://github.com/jatanassian/Memo",
          url: null,
          image: "memo"
        },
        {
          key: 4,
          name: "Interview scheduler",
          description: "Single-page app that allows users to book, edit or cancel interviews for each day of the week.",
          tech: "React.js, Node.js, Jest, Cypress",
          github: "https://github.com/jatanassian/scheduler",
          url: "https://competent-kepler-8ba31c.netlify.com",
          image: "scheduler"
        },
        {
          key: 5,
          name: "Jungle",
          description: "A mini e-commerce application which allows users to view and purchase products with Stripe verification. Admins can add products and categories.",
          tech: "Rails 4.2, PostgreSQL, SASS/SCSS, Bootstrap 4",
          github: "https://github.com/jatanassian/jungle-rails",
          url: null,
          image: "jungle"
        },
        {
          key: 6,
          name: "Nomad",
          description: "A travel planner which suggests cities, activities and estimated cost. Once a city is added to the trip it suggests you a new city to explore around the previous one.",
          tech: "React.js, Node.js, PostgreSQL, knex.js, Google Maps API, Nodemailer, SASS/SCSS, Bootstrap",
          github: "https://github.com/jatanassian/Nomad",
          url: null,
          image: "nomad"
        },
        {
          key: 7,
          name: "CSS Playground",
          description: "A webapp that let's you play with different CSS properties (rotate, skew...) and copy the code.",
          tech: "Vue.js",
          github: "https://github.com/jatanassian/css-playground",
          url: "https://vigorous-lichterman-d7a26f.netlify.app",
          image: "css-playground"
        },
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  margin: 0 1rem;
  padding: 3rem 0;
  border-top: solid 1px #ffffff;
  border-bottom: solid 1px #ffffff;
}

.projects-container {
  display: grid;
  justify-items: center;
  align-items: start;
  gap: 1rem;
}

h2 {
  font-size: 40px;
}

@media (min-width: 650px) {
  .projects { margin: 0 2rem; }
  .projects-container  { grid-template-columns: repeat(2, minmax(200px, 1fr)); }
}

@media (min-width: 1100px) {
  .projects { margin: 0 5rem; }
  .projects-container  { grid-template-columns: repeat(3, minmax(200px, 1fr)); }
}
</style>