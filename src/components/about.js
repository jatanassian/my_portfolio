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
      <p>Hi, I'm a <span style={{ color: '#c80b72' }}>full stack web developer</span> with a background in marketing based in Ottawa.</p>
      <p>I enjoy the never ending learning journey that is web development. I also like solving problems and being part of a community. Member of <a style={{ textDecoration: 'none', borderBottom: 'solid 1px #c80b72', color: '#c80b72' }} href="https://www.meetup.com/Ottawa-JavaScript/" rel="noopener noreferrer" target="_blank">Ottawa JavaScript</a>, <a style={{ textDecoration: 'none', borderBottom: 'solid 1px #c80b72', color: '#c80b72' }} href="https://www.meetup.com/OttawaRuby/" rel="noopener noreferrer" target="_blank">Ottawa Ruby</a> & <a style={{ textDecoration: 'none', borderBottom: 'solid 1px #c80b72', color: '#c80b72' }} href="https://www.meetup.com/Ottawa-ReactJS-Meetup/" rel="noopener noreferrer" target="_blank">React Ottawa</a>.</p>
      <p>If you want to contact me, send me an email at <a style={{ textDecoration: 'none', borderBottom: 'solid 1px #c80b72', color: '#c80b72' }} href="mailto:julien.atanassian@gmail.com">julien.atanassian@gmail.com</a></p>
      <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '1.8rem'}}>
        <ul style={{listStyle: 'none', marginRight: '1.5rem', lineHeight: '.5rem' }}>
          <li style={{ fontSize: '.85rem' }}><strong>Languages:</strong></li>
          <li style={{ fontSize: '.7rem' }}>HTML5 & CSS3</li>
          <li style={{ fontSize: '.7rem' }}>JavaScript</li>
          <li style={{ fontSize: '.7rem' }}>Ruby</li>
        </ul>
        <ul style={{listStyle: 'none', marginRight: '1.5rem', lineHeight: '.5rem'}}>
          <li style={{ fontSize: '.85rem' }}><strong>Frameworks & Libraries:</strong></li>
          <li style={{ fontSize: '.75rem' }}>Node.js</li>
          <li style={{ fontSize: '.75rem' }}>Express</li>
          <li style={{ fontSize: '.75rem' }}>Vue.js</li>
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
