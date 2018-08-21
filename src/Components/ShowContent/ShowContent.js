import React from 'react';
import './ShowContent.css';
import Home from './../Home/Home';
import Travel from './../Travel/Travel';
import Stay from './../Stay/Stay';
import FoodCards from './../Food/FoodCard/FoodCards';
import {Switch, Route } from 'react-router-dom';

const ShowContent =()=>{
	return(
		<Switch>
			<Route
				exact 
				path='/'
				component={Home}>
				</Route>
			<Route 
				exact 
				path='/dehradun'
				component={Home}>
				</Route>
			<Route 
				exact 
				path='/travel'
				component={Travel}>
				</Route>
			<Route 
				exact 
				path='/dehradun/stay'
				component={Stay}>
				</Route>
			<Route
				exact
				path='/dehradun/food'
				component={FoodCards}>
				</Route>
			<Route
				exact
				path='/dehradun/listings/:restId'
				component={FoodCards}>
				</Route>
		</Switch>
		)
}

export default ShowContent;