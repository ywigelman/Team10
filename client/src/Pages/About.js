import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
export function About() {
	return (
		<Container>
			<Row>
				<Col></Col>
				<Col>
					<Card>
						<Card.Body>
							<h2>About Sign&Shoot </h2>
							<p>
								Welcome to our community!
								<br />
								<i>Sign & Shoot</i> is designed to teach American Sign Language
								to everyone. <br />
								Together, we will build a community, and elevate bridges of
								communication to allow main stream culture to merge with the
								silent culture. <br />
								Our main goal is to make Sign Language accessible world-wide
								with a easy to use app and friendly interface.
							</p>
						</Card.Body>
					</Card>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
}
