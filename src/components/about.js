import React from "react"

const About = () => (
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        border: 'solid 1px blue'
      }}
    >
      <h3>About me</h3>
      <p>Hi, I'm a full stack web developer with a background in marketing based in Ottawa.</p>
      <div style={{display: 'flex'}}>
        <ul style={{listStyle: 'none'}}>
          <li>Languages:</li>
          <li>HTML5 & CSS3</li>
          <li>JavaScript</li>
          <li>Ruby</li>
        </ul>
        <ul style={{listStyle: 'none'}}>
          <li>Frameworks & Libraries:</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>React.js</li>
          <li>Ruby on Rails</li>
          <li>jQuery</li>
        </ul>
        <ul style={{listStyle: 'none'}}>
          <li>Databases & Systems:</li>
          <li>SQL</li>
          <li>PostgreSQL</li>
          <li>Git</li>
        </ul>
        <ul style={{listStyle: 'none'}}>
          <li>Testing frameworks:</li>
          <li>Mocha & Chai</li>
          <li>Jest</li>
          <li>Cypress</li>
          <li>Capybara</li>
        </ul>
      </div>
    </div>
)

export default About
