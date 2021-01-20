import { Card, CardColumns, Container, Row , Button} from 'react-bootstrap';
import alphabet from './abc-pics';
// import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';


export const Dictionary = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const onClick = e => {
		e.preventDefault();
		if (!isFlipped) setIsFlipped(true);
		if (isFlipped) setIsFlipped(false);
	};

	return (
		<Container>
			<CardColumns className='m-3'>
				{alphabet &&
					alphabet.map(({ id, src, title, alt }) => (
						// <ReactCardFlip isFlipped={!isFlipped}>
							<Card border='info' className='text-center' key={id}>
								<Card.Img
									variant='top'
									fluid
									src={src}
									title={title}
									alt={alt}
								/>
								<Card.Body>Click to see the letter</Card.Body>
								<Button onClick={onClick}>Flip</Button>
							</Card>

							// <Card>
							// 	<h1>{id}</h1>
							// 	<Button onClick={onClick}>Flip</Button>
							// </Card>
						// </ReactCardFlip>
					))}
			</CardColumns>
		</Container>
	);
};
