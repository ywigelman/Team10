import React from 'react';
import { Card } from 'react-bootstrap';

export function About() {

    return (<Card className="mt-3" bg="dark" text="white" style={{ width: '100%' }}>
        <Card.Header>About us</Card.Header>
        <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
               Something about what we tried to accomplish and maybe a little bit about our team
            </Card.Text>
        </Card.Body>
    </Card>)
}