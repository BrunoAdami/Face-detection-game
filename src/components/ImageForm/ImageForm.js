import React from 'react';

const ImageForm = (props) => {
	return(
		<div>
			<p className ='f3 center'>
				{'The system will recognize who is the funniest person in your picture!'}
			</p>
			<p className ='f3 center'>
				{'Just insert an Url to your image below.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5 '>
					<input className='f4 pa2 w-70 center' type='text' onChange={props.onInputChange}/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={props.onButtonSubmit}
					>Analize</button>
				</div>
			</div>
		</div>
	);
}

export default ImageForm;