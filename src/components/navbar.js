import React from "react"

const Navbar = () => (
    <div
      id='about'
      style={{
        padding: '.3rem 0',
        width: '100%',
        zIndex: '2',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'white'
      }}
    >
      <a href='#about' style={{ color: 'inherit', textDecoration: 'none', fontSize: '.9rem' }}>About</a>
      <a href='#portfolio' style={{ color: 'inherit', textDecoration: 'none', fontSize: '.9rem' }}>Portfolio</a>
    </div>
)

export default Navbar
