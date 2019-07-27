import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div  className="dib mw5 tc bg-light-pink br3 grow pa4 ma2 mv3 ba b--black-10">
			<img src={`https://robohash.org/${id}?200x200`} alt="robot"/> 
			<div>
				<h2 className="f4">{ name }</h2>
				<hr className="mw3 bb bw1 b--black-10"></hr>
				<p className="lh-copy f6 black-70">{ email }</p>
			</div>
		</div>
		);
}

export default Card
		 