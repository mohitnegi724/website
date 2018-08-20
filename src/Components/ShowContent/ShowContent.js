import React from 'react';
import './ShowContent.css';
import Home from './../Home/Home';
import FoodCards from './../Food/FoodCard/FoodCards';
import OpenFoodCard from './../Food/OpenFoodCard/OpenFoodCard';
import {Switch, Route } from 'react-router-dom';

const ShowContent =()=>{
	return(
		<Switch>
			<Route exact path='/dehradun' component={Home}></Route>
			<Route exact path='/dehradun/food' component={FoodCards}></Route>
		</Switch>
		)
}

export default ShowContent;