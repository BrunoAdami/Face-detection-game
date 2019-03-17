import React from 'react';
import Tilt from 'react-tilt';
import './pict.css';
import face from './face.png'

const Pict = () => {
	return(
		<div className = 'center ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
 				<img style={{paddingTop: '5px'}} src={face} alt="FaceRecognition"/>
			</Tilt>
		</div>
	);
}

export default Pict;