import { Card, CardDeck } from 'react-bootstrap';
import alphabet from './abc-pics';

export const Dictionary = () => {
	return (
		<CardDeck>
			{alphabet &&
				alphabet.map(({ id, src, title, alt }) => (
					<Card key={id}>
						<Card.Img src={src} title={title} alt={alt} />
					</Card>
				))}
		</CardDeck>
	);
};


