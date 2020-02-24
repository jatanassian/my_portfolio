import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "../components/navbar"
import Name from "../components/name"
import About from "../components/about"
import Project from "../components/project"
import SEO from "../components/seo"

import '../components/styles.css'

const projects = [
  {
    key: 1,
    name: "Angular Calculator",
    description: "A calculator performing basic maths.",
    tech: "Angular",
    github: "https://github.com/jatanassian/Angular_Calculator",
    url: "https://pedantic-beaver-93b9fa.netlify.com",
    image: require("../images/angular_calculator.png")
  },
  {
    key: 2,
    name: "Nomad",
    description: "A travel planner which suggests random cities, the main activities and the estimated cost for accommodation, transport and daily life. Once a city is added to the trip it suggests you a new city to explore around the previous one.",
    tech: "React.js, Node.js, Express, Axios, PostgreSQL, knex.js, Google Maps API, Nodemailer, SASS/SCSS, React Bootstrap, Json Web Token",
    github: "https://github.com/jatanassian/Nomad",
    url: null,
    image: require("../images/nomad.png")
  },
  {
    key: 3,
    name: "Jungle",
    description: "A mini e-commerce application which allows users to view and purchase products with Stripe verification. Admins can add products and categories.",
    tech: "Rails 4.2, PostgreSQL, SASS/SCSS, Bootstrap 4, bcrypt, Stripe API",
    github: "https://github.com/jatanassian/jungle-rails",
    url: null,
    image: require("../images/jungle.png")
  },
  {
    key: 4,
    name: "Interview scheduler",
    description: "This is a single-page app built on React.js that allows users to book, edit or cancel interviews for each day of the week .",
    tech: "React.js, Node.js, Axios, Storybook, Jest, Cypress",
    github: "https://github.com/jatanassian/scheduler",
    url: "https://competent-kepler-8ba31c.netlify.com",
    image: require("../images/scheduler.png")
  },
  {
    key: 5,
    name: "Memo",
    description: "A web application inspired by Reddit that allows users to post content, like, rate and comment posts, create a collection of posts and review all their activity.",
    tech: "EJS, Express, jQuery, Node.js, AJAX, SASS/SCSS, PostgreSQL",
    github: "https://github.com/jatanassian/Memo",
    url: null,
    image: require("../images/memo.png")
  },
  {
    key: 6,
    name: "Tweeter",
    description: "A simple and responsive single-page Twitter clone.",
    tech: "jQuery, CSS, AJAX, Node.js",
    github: "https://github.com/jatanassian/tweeter",
    url: null,
    image: require("../images/tweeter.png")
  },
  {
    key: 7,
    name: "TinyApp",
    description: "A URL shortening app with basic analytics.",
    tech: "Node.js, Express, EJS, bcrypt, cookie-session, Mocha, Chai",
    github: "https://github.com/jatanassian/tinyapp",
    url: null,
    image: require("../images/tinyapp.png")
  },
]

const IndexPage = () => (
  <div style={{backgroundColor: '#ffffff', backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }}>
    <Navbar/>
    <div style={{ padding: '0 3rem' }}>
      <SEO title="Julien Atanassian Portfolio" />
      <Name/>
      <About/>
      <h3 style={{ margin: '0 auto', padding: `1.45rem 1.0875rem 0 1.0875rem`, fontFamily: 'Roboto Slab, serif', fontWeight: '600' }} id='portfolio'>Featured projects:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start', margin: `0 auto`, padding: `1.45rem 0` }}>
        {projects.map(project => {
          return <Project 
            key = {project.key}
            name = {project.name}
            description = {project.description}
            tech = {project.tech}
            github = {project.github}
            url = {project.url}
            image = {project.image}
          />
        })}
      </div>
      <footer style={{ textAlign: 'center', fontSize: '.75rem' }}>
        © {new Date().getFullYear()}, Julien Atanassian. Built with
        {` `}
        <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.gatsbyjs.org"><u>Gatsby</u></a>
      </footer>
    </div>
  </div>
)

export default IndexPage
