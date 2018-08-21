import React from 'react';
import './Travel.css';
export default class Travel extends React.Component{
	render(){
		return(
				<div className="TravelContainer">
					<div className="TravelContainerDiv">
						<img src="https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1534784564/Travel.png" alt="TravelLogo" className="TravelLogo"/>
					</div>
				</div>
			)
	}
}