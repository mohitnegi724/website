import React from 'react';
import './ShowContent.css';
import Home from './../Home/Home';
import Wander from './../Wander/Wander';
import StayCards from './../Stay/StayCard/StayCards';
import FoodCards from './../Food/FoodCard/FoodCards';
import Music from './../Music/Music';
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
				path='/wander'
				component={Wander}>
				</Route>
			<Route 
				exact 
				path='/dehradun/stay'
				component={StayCards}>
				</Route>
			<Route
				exact
				path='/dehradun/food'
				component={FoodCards}>
				</Route>
			<Route
				exact
				path='/dehradun/food/:restId'
				component={FoodCards}>
				</Route>
			<Route
				exact
				path='/dehradun/stay/:stayId'
				component={StayCards}>
				</Route>
			<Route
				exact
				path='/music'
				component={Music}>
				</Route>
		</Switch>
		)
}

export default ShowContent;