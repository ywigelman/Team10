import { useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import alphabet from './abc-pics';
import FlippingCard from './FlippinCard';
import { MDBBtn } from 'mdbreact';

export const Dictionary = () => {
	const [flipAll, setFlipAll] = useState(false);
	return (
		<Container>
			 <Button style={{ backgroundColor: '#6800F4' }} onClick={() => setFlipAll(!flipAll)}>Reveal all</Button>
			{alphabet && (
				<Row
					style={{ textAlign: 'center', justifyContent: 'center' }}
					sm={5}
					lg={4}
					>
					{alphabet.map(letter => (
						<FlippingCard otherSide={letter.id} key={letter.id} flip={flipAll}>
							<Card className='text-center shadow-lg bg-white rounded'>
								<Card.Img
									height='180'
									variant='top'
									src={letter.src}
									title={letter.title}
									alt={letter.alt}
								/>
								<Card.Body>Flip Card</Card.Body>
							</Card>
						</FlippingCard>
					))}
				</Row>
			)}
		</Container>
	);
};
