import React from 'react';
import { Button } from 'react-bootstrap';

export function Profile() {
	return (
		<>
			<h1>Profile Page</h1>
			<h2>Hello Stranger</h2>
			Congrats!! <br />
			You've reached level xxx! <br />
			When you reach level zzz, you will be able to connect with our community!
			<Button style={{ backgroundColor: '#6800F4' }}>Keep Learning</Button>
		</>
	);
}