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
        Julien Atanassian
      </h1>
      <h3 style={{ color: '#000080' }}>Full Stack Web Developer</h3>
      <a href='https://github.com/jatanassian' rel="noopener noreferrer" target="_blank"><img src={require('../images/github-logo.svg')} alt='GitHub' style={{ width: '1.8rem', height: 'auto' }}/></a>
      <br />
      <a href='https://www.linkedin.com/in/julien-atanassian/' rel="noopener noreferrer" target="_blank">LinkedIn</a>
      <br />
      <a href="mailto:julien.atanassian@gmail.com">julien.atanassian@gmail.com</a>
    </div>
)

export default Name
