import React, { useEffect , useState} from 'react';
import { Button } from 'react-bootstrap';

export function Profile(props) {
	return (
		<>
			<h1>Profile Page</h1>
			<h2>Hello Stranger</h2>
			Congrats!! <br />
			You've reached level 4! <br />
			When you reach level the final stage, you will be able to connect with our community!
			<Button style={{ backgroundColor: '#6800F4' }} href="/learningPage">Keep Learning</Button>
		</>
	);
}
