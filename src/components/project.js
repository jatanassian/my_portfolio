import React from "react"
import { Card, Button } from 'react-bootstrap'

const Project = () => (
  <Card style={{ width: '25rem', height: '25rem' }}>
  <Card.Img variant="top" src="https://github.com/theomalaper/Nomad/raw/master/doc/img/Screen%20Shot%202019-11-08%20at%2011.27.23%20AM.png?raw=true" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
)

export default Project
