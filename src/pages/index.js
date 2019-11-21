import React, { Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Name from "../components/name"
import About from "../components/about"
import Project from "../components/project"
import SEO from "../components/seo"

const projects = [
  {
    name: "Nomad",
    description: "A travel planner which suggests random cities, the main activities and the estimated cost for accommodation, transport and daily life. Once a city is added to the trip it suggests you a new city to explore around the previous one.",
    tech: "React.js, Node.js, Express, Axios, PostgreSQL, knex.js, Google Maps API, Nodemailer, SASS/SCSS, React Bootstrap, Json Web Token",
    github: "https://github.com/jatanassian/Nomad",
    image: "https://github.com/theomalaper/Nomad/raw/master/doc/img/Screen%20Shot%202019-11-08%20at%2011.27.23%20AM.png?raw=true"
  },
  {
    name: "Jungle",
    description: "A mini e-commerce application which allows users to view and purchase products with Stripe verification. Admins can add products and categories.",
    tech: "Rails 4.2, PostgreSQL, SASS/SCSS, Bootstrap 4, bcrypt, Stripe API",
    github: "https://github.com/jatanassian/jungle-rails",
    image: "https://github.com/JCyan90/jungle-rails/blob/master/docs/Homepage.png?raw=true"
  },
  {
    name: "Interview scheduler",
    description: "This is a single-page app built on React.js that allows users to book, edit or cancel interviews for each day of the week .",
    tech: "React.js, Node.js, Axios, Storybook, Jest, Cypress",
    github: "https://github.com/jatanassian/scheduler",
    image: "https://github.com/theomalaper/Nomad/raw/master/doc/img/Screen%20Shot%202019-11-08%20at%2011.27.23%20AM.png?raw=true"
  },
  {
    name: "Memo",
    description: "A web application inspired by Reddit that allows users to post content, like, rate and comment posts, create a collection of posts and review all their activity.",
    tech: "EJS, Express, jQuery, Node.js, AJAX, SASS/SCSS, PostgreSQL",
    github: "https://github.com/jatanassian/Memo",
    image: "https://raw.githubusercontent.com/JCyan90/Memo/master/docs/post-page.png"
  },
  {
    name: "Tweeter",
    description: "A simple and responsive single-page Twitter clone.",
    tech: "jQuery, CSS, AJAX, Node.js",
    github: "https://github.com/jatanassian/tweeter",
    image: "https://github.com/JCyan90/tweeter/raw/master/docs/Screenshot1.png?raw=true"
  },
  {
    name: "TinyApp",
    description: "A URL shortening app with basic analytics.",
    tech: "Node.js, Express, EJS, bcrypt, cookie-session, Mocha, Chai",
    github: "https://github.com/jatanassian/tinyapp",
    image: "https://github.com/JCyan90/tinyapp/raw/master/docs/urls:shortURL_page.png?raw=true"
  },
]

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Name/>
    <About />
    <h3>Featured projects:</h3>
    {projects.map(project => {
      return <Project />
    })}
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Fragment>
)

export default IndexPage
