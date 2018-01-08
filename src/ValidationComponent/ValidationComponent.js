import React from 'react';

const ValidationComponent = (props) => {

	let textLength = props.textAmount;

	let textAmount = null;

	if ( textLength <= 5) {
		textAmount = (
			<p>Text is too short</p>
		);
	} else {
		textAmount = (
			<p>Text is niiiice!</p>
		);
	}

	return (
		<div>
			{textAmount}
		</div>
	);
};

export default ValidationComponent;