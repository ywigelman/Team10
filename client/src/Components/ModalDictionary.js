import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Dictionary } from './dictionary';

export function MyVerticallyCenteredModal(props) {
	return (
		<Modal
      {...props}
      size="lg"
			dialogClassName='modal-95w'
			aria-labelledby='contained-modal-title-vcenter'
			centered
      >
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					ASL DICTIONARY
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Dictionary />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
