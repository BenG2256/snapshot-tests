import React from "react"
import Card from "react-bootstrap/Card"
import CodePen from './CodePen.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={CodePen} />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>CodePen</Card.Title>
            <Card.Text>
            I am an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard