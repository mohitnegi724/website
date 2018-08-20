import React from 'react';
import './ShowContent.css';
import Home from './../Home/Home';
import FoodCard from './../Food/FoodCard/FoodCard';
import OpenFoodCard from './../Food/OpenFoodCard/OpenFoodCard';

import {Switch, Route } from 'react-router-dom';

const ShowContent =()=>{
	return(
		<Switch>
			<Route exact path='/dehradun' component="Home"></Route>
			<Route exact path='/dehradun/food' component="FoodCard"></Route>
		</Switch>
		)
}

export default ShowContent;