import React from "react"

const Name = () => (
    <div
      style={{
        margin: `0 auto`,
        height: '100vh',
        padding: `1.45rem 1.0875rem`,
        border: 'solid 1px red',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '4rem', color: '#000080' }}>
        <strong>Julien Atanassian</strong>
      </h1>
      <h3 style={{ color: '#000080' }}>Full Stack Web Developer</h3>
      <a href='https://github.com/jatanassian' rel="noopener noreferrer" target="_blank"><img src={require('../images/github-logo.svg')} alt='GitHub' style={{ width: '1.8rem', height: 'auto', marginRight: '.8rem' }}/></a>
      <a href='https://www.linkedin.com/in/julien-atanassian/' rel="noopener noreferrer" target="_blank"><img src={require('../images/linkedin-logo.svg')} alt='LinkedIn' style={{ width: '1.8rem', height: 'auto', marginRight: '.8rem' }}/></a>
      <a href="mailto:julien.atanassian@gmail.com"><img src={require('../images/email-logo.svg')} alt='julien.atanassian@gmail.com' style={{ width: '1.8rem', height: 'auto', marginTop: '8px' }}/></a>
    </div>
)

export default Name
