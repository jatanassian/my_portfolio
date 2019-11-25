import React from "react"

const About = () => (
    <div
      id='about'
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        borderTop: 'solid 1px #000080',
        borderBottom: 'solid 1px #000080',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: '600'
      }}
    >
      <h3 style={{ fontFamily: 'Roboto Slab, serif', fontWeight: '600' }}>About me</h3>
      <p>Hi, I'm a full stack web developer with a background in marketing based in Ottawa and looking for opportunities.</p>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <ul style={{listStyle: 'none', marginRight: '1.5rem', lineHeight: '.5rem'}}>
          <li style={{ fontSize: '.85rem' }}><strong>Languages:</strong></li>
          <li style={{ fontSize: '.7rem' }}>HTML5 & CSS3</li>
          <li style={{ fontSize: '.7rem' }}>JavaScript</li>
          <li style={{ fontSize: '.7rem' }}>Ruby</li>
        </ul>
        <ul style={{listStyle: 'none', marginRight: '1.5rem', lineHeight: '.5rem'}}>
          <li style={{ fontSize: '.85rem' }}><strong>Frameworks & Libraries:</strong></li>
          <li style={{ fontSize: '.75rem' }}>Node.js</li>
          <li style={{ fontSize: '.75rem' }}>Express</li>
          <li style={{ fontSize: '.75rem' }}>React.js</li>
          <li style={{ fontSize: '.75rem' }}>Ruby on Rails</li>
          <li style={{ fontSize: '.75rem' }}>jQuery</li>
        </ul>
        <ul style={{listStyle: 'none', marginRight: '1.5rem', lineHeight: '.5rem'}}>
          <li style={{ fontSize: '.85rem' }}><strong>Databases & Systems:</strong></li>
          <li style={{ fontSize: '.75rem' }}>SQL</li>
          <li style={{ fontSize: '.75rem' }}>PostgreSQL</li>
          <li style={{ fontSize: '.75rem' }}>Git</li>
        </ul>
        <ul style={{listStyle: 'none', lineHeight: '.5rem'}}>
          <li style={{ fontSize: '.85rem' }}><strong>Testing frameworks:</strong></li>
          <li style={{ fontSize: '.75rem' }}>Mocha & Chai</li>
          <li style={{ fontSize: '.75rem' }}>Jest</li>
          <li style={{ fontSize: '.75rem' }}>Cypress</li>
          <li style={{ fontSize: '.75rem' }}>Capybara</li>
        </ul>
      </div>
    </div>
)

export default About
