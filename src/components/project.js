import React from "react"
import { Card, Button } from 'react-bootstrap'

const Project = (props) => {
  const { name, description, tech, github, image } = props
  
  return (
    <Card style={{ width: '22rem', margin: '0 1rem 2rem 1rem' }}>
      <Card.Img style={{ marginBottom: '0' }}variant="top" src={image} />
      <Card.Body style= {{ paddingTop: '.5rem' }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ fontSize: '.8rem' }}>{description} <br />Made using {tech}</Card.Text>
        <Button variant="outline-secondary"><a style={{ textDecoration: 'none' }} href={github} rel="noopener noreferrer" target="_blank">GitHub Repo</a></Button>
      </Card.Body>
    </Card>
  )
}

export default Project
