import React from "react"

const Name = () => (
    <div
      style={{
        margin: `0 auto`,
        height: '100vh',
        padding: `1.45rem 5rem`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className='name'
    >
      <h1 style={{ margin: 0, fontSize: '4rem', color: '#000080', fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}>
        <strong>Julien Atanassian</strong>
      </h1>
      <h3 style={{ color: '#000080', fontSize: '1.2rem', fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }} >Full Stack Web Developer</h3>
      <div>
        <a href='https://github.com/jatanassian' rel="noopener noreferrer" target="_blank"><img src={require('../images/github-logo.png')} alt='GitHub' style={{ width: '1.5rem', height: 'auto', marginRight: '1rem' }}/></a>
        <a href='https://www.linkedin.com/in/julien-atanassian/' rel="noopener noreferrer" target="_blank"><img src={require('../images/linkedin-logo.png')} alt='LinkedIn' style={{ width: '1.5rem', height: 'auto', marginRight: '1rem' }}/></a>
        <a href="mailto:julien.atanassian@gmail.com"><img src={require('../images/email-logo.png')} alt='julien.atanassian@gmail.com' style={{ width: '1.5rem', height: 'auto', marginTop: '8px' }}/></a>
      </div>
    </div>
)

export default Name
