import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
export function About() {
	return (
		<Container>
			<Row mt-3>
				<Col></Col>
				<Col sm={8}>
					<Jumbotron>
						<h2>About Sign & Shoot </h2>
						<p>
							<br />
							<h3> Welcome to our community!</h3>
							<br />
							<br />
							<i>Sign & Shoot</i> is designed to teach American Sign Language to
							everyone. <br />
							Together, we will build a community, and elevate bridges of
							communication to allow main stream culture to merge with the
							silent culture. <br />
							Our main goal is to make Sign Language accessible world-wide with
							a easy to use app and friendly interface.
						</p>
					</Jumbotron>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
}
