import React, { Fragment } from "react"
import { Card } from 'react-bootstrap'

const Project = (props) => {
  const { name, description, tech, github, url, image } = props
  
  return (
    <Card style={{ width: '22rem', margin: '0 1rem 2rem 1rem', fontSize: '.8rem', boxShadow: '.1rem .1rem .2rem grey' }}>
      <Card.Img style={{ marginBottom: '0' }}variant="top" src={image} />
      <Card.Body style= {{ padding: '.5rem 1rem' }}>
        <Card.Title style={{fontSize: '1rem', marginBottom: '.4rem', fontFamily: 'Open Sans, serif', fontWeight: '600' }}>{name}</Card.Title>
        <Card.Text style = {{ marginBottom: '.5rem', fontSize: '.75rem', fontFamily: 'Open Sans, serif' }}>{description} <br />Made using {tech}</Card.Text>
        <a style={{ color: 'inherit', textDecoration: 'none', fontSize: '.8rem' }} href={github} rel="noopener noreferrer" target="_blank">
          <img src={require('../images/github-logo2.png')} alt='GitHub' style={{ width: '1rem', height: 'auto', margin: '0 .2rem .3rem 0' }}/> <u>GitHub Repo</u>
        </a>
        {url ? <Fragment><br /><a style={{ color: 'inherit', textDecoration: 'none', fontSize: '.8rem' }} href={url} rel="noopener noreferrer" target="_blank"><img src={require('../images/live.png')} alt='GitHub' style={{ width: '1.6rem', height: 'auto', margin: '0 .2rem .3rem 0' }}/> <u>See website</u></a></Fragment> : null}
      </Card.Body>
    </Card>
  )
}

export default Project
