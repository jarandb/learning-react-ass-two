import React from 'react';

const CharComponent = (props) => {

	return ( 
		<span onClick={props.click} style={props.style}>{props.children}</span>
	);
}

export default CharComponent;