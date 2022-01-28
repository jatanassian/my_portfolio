<template>
  <section class="projects">
    <h2>Projects</h2>
    <div class="projects-container">
      <Project v-for="project in projects" :key="project.key" :project="project"/>
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
          name: "CSS Playground",
          description: "A webapp that let's you play with different CSS properties (rotate, skew...) and copy the code.",
          tech: "Vue.js",
          github: "https://github.com/jatanassian/css-playground",
          url: "https://vigorous-lichterman-d7a26f.netlify.app",
          image: "css-playground"
        },
        {
          key: 2,
          name: "Nomad",
          description: "A travel planner which suggests cities, activities and estimated cost. Once a city is added to the trip it suggests you a new city to explore around the previous one.",
          tech: "React.js, Node.js, PostgreSQL, knex.js, Google Maps API, Nodemailer, SASS/SCSS, Bootstrap",
          github: "https://github.com/jatanassian/Nomad",
          url: null,
          image: "nomad"
        },
        {
          key: 3,
          name: "Jungle",
          description: "A mini e-commerce application which allows users to view and purchase products with Stripe verification. Admins can add products and categories.",
          tech: "Rails 4.2, PostgreSQL, SASS/SCSS, Bootstrap 4",
          github: "https://github.com/jatanassian/jungle-rails",
          url: null,
          image: "jungle"
        },
        {
          key: 4,
          name: "Interview scheduler",
          description: "This is a single-page app built on React.js that allows users to book, edit or cancel interviews for each day of the week .",
          tech: "React.js, Node.js, Jest, Cypress",
          github: "https://github.com/jatanassian/scheduler",
          url: "https://competent-kepler-8ba31c.netlify.com",
          image: "scheduler"
        },
        {
          key: 5,
          name: "Memo",
          description: "A web application inspired by Reddit that allows users to post content, like, rate and comment posts, create a collection of posts and review all their activity.",
          tech: "EJS, jQuery, Node.js, AJAX, SASS/SCSS, PostgreSQL",
          github: "https://github.com/jatanassian/Memo",
          url: null,
          image: "memo"
        },
        {
          key: 6,
          name: "Tweeter",
          description: "A simple and responsive single-page Twitter clone.",
          tech: "jQuery, CSS, AJAX, Node.js",
          github: "https://github.com/jatanassian/tweeter",
          url: null,
          image: "tweeter"
        },
        {
          key: 7,
          name: "TinyApp",
          description: "A URL shortening app with basic analytics.",
          tech: "Node.js, Express, EJS, bcrypt, cookie-session, Mocha, Chai",
          github: "https://github.com/jatanassian/tinyapp",
          url: null,
          image: "tinyapp"
        },
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  margin: 0 5rem;
  padding: 3rem 0;
  border-top: solid 1px #ffffff;
  border-bottom: solid 1px #ffffff;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  justify-items: center;
  gap: 1rem;
}

h2 {
  font-size: 40px;
}

.projects-list {
  display: grid;

}
</style>