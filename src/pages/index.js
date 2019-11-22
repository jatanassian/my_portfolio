import React, { Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Name from "../components/name"
import About from "../components/about"
import Project from "../components/project"
import SEO from "../components/seo"

const projects = [
  {
    key: 1,
    name: "Nomad",
    description: "A travel planner which suggests random cities, the main activities and the estimated cost for accommodation, transport and daily life. Once a city is added to the trip it suggests you a new city to explore around the previous one.",
    tech: "React.js, Node.js, Express, Axios, PostgreSQL, knex.js, Google Maps API, Nodemailer, SASS/SCSS, React Bootstrap, Json Web Token",
    github: "https://github.com/jatanassian/Nomad",
    image: require("../images/nomad.png")
  },
  {
    key: 2,
    name: "Jungle",
    description: "A mini e-commerce application which allows users to view and purchase products with Stripe verification. Admins can add products and categories.",
    tech: "Rails 4.2, PostgreSQL, SASS/SCSS, Bootstrap 4, bcrypt, Stripe API",
    github: "https://github.com/jatanassian/jungle-rails",
    image: require("../images/jungle.png")
  },
  {
    key: 3,
    name: "Interview scheduler",
    description: "This is a single-page app built on React.js that allows users to book, edit or cancel interviews for each day of the week .",
    tech: "React.js, Node.js, Axios, Storybook, Jest, Cypress",
    github: "https://github.com/jatanassian/scheduler",
    image: require("../images/scheduler.png")
  },
  {
    key: 4,
    name: "Memo",
    description: "A web application inspired by Reddit that allows users to post content, like, rate and comment posts, create a collection of posts and review all their activity.",
    tech: "EJS, Express, jQuery, Node.js, AJAX, SASS/SCSS, PostgreSQL",
    github: "https://github.com/jatanassian/Memo",
    image: require("../images/memo.png")
  },
  {
    key: 5,
    name: "Tweeter",
    description: "A simple and responsive single-page Twitter clone.",
    tech: "jQuery, CSS, AJAX, Node.js",
    github: "https://github.com/jatanassian/tweeter",
    image: require("../images/tweeter.png")
  },
  {
    key: 6,
    name: "TinyApp",
    description: "A URL shortening app with basic analytics.",
    tech: "Node.js, Express, EJS, bcrypt, cookie-session, Mocha, Chai",
    github: "https://github.com/jatanassian/tinyapp",
    image: require("../images/tinyapp.png")
  },
]

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Name/>
    <About />
    <h3>Featured projects:</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start'}}>
      {projects.map(project => {
        return <Project 
          key = {project.key}
          name = {project.name}
          description = {project.description}
          tech = {project.tech}
          github = {project.github}
          image = {project.image}
        />
      })}
    </div>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Fragment>
)

export default IndexPage
