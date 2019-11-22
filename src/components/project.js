import React from "react"
import { Card, Button } from 'react-bootstrap'

const Project = (props) => {
  const { name, description, tech, github, image } = props
  
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description} <br />Made with {tech}</Card.Text>
        <Button variant="outline-secondary"><a style={{ textDecoration: 'none' }} href={github} rel="noopener noreferrer" target="_blank">GitHub Repo</a></Button>
      </Card.Body>
    </Card>
  )
}

export default Project
