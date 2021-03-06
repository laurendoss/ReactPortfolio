import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './project.css'


class Project extends Component {

    
    render() {
       
        return (
            <div className="holderDiv">
            <Card className="projectCard">
                <Card.Img variant="top" src={this.props.src} />
                <Card.Body>
                    <Card.Title className="cardTitle">{this.props.name}</Card.Title>
                    <Card.Text>
                    <p>{this.props.description}</p>
                    <p className="role">Role: {this.props.role}</p>
                    </Card.Text>
                    <Button className="projectButton" href={this.props.link} target="_blank">Visit Deployed Project</Button>
                    <Button className="projectButton" href={this.props.repo} target="_blank">Visit GitHub Repository</Button>
                </Card.Body>
            </Card>
            </div>
        )
    }
}

export default Project; 