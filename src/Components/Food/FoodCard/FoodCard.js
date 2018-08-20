import React from 'react';
import './FoodCard.css';

const FoodCard = (props)=>{
	return(
		<div className="FoodCardBody">
			<img className="RestHeaderImage" src={props.RestHeaderImage}/>
			<h4 id="Name">{props.Name}</h4>
			<input type="text" onChange={props.textChange} value={props.Name}/>
			<p>{props.MealForTwo}</p>
			<p className="MustTry"><strong>Must Try : </strong> {props.MustTry}</p>
			<p className="type">{props.type}</p>
		</div>
	)
}

export default FoodCard;