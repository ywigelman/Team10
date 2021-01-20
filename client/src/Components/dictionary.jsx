import { Card, CardColumns, Container } from 'react-bootstrap';
import alphabet from './abc-pics';
import FlippingCard from './FlippinCard';

export const Dictionary = () => {
	return (
		<Container>
			{alphabet && (
				<CardColumns className='m-3'>
					{alphabet.map(letter => (
						<FlippingCard otherSide={letter.id} key={letter.id}>
							<Card border='info' className='text-center'>
								<Card.Img
									height='330'
									variant='top'
									src={letter.src}
									title={letter.title}
									alt={letter.alt}
								/>
								<Card.Body>Click to see the letter</Card.Body>
							</Card>
						</FlippingCard>
					))}
				</CardColumns>
			)}
		</Container>
	);
};
