import React from 'react';
import './ShowContent.css';
import Home from './../Home/Home';
import Wander from './../Wander/Wander';
import StayCards from './../Stay/StayCard/StayCards';
import FoodCards from './../Food/FoodCard/FoodCards';
import Music from './../Music/Music';
import Error404 from './../Error404/Error404';
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
				path='/dehradun/food/:Id'
				component={FoodCards}>
				</Route>
			<Route
				exact
				path='/dehradun/stay/:Id'
				component={StayCards}>
				</Route>
			<Route
				exact
				path='/music'
				component={Music}>
				</Route>
			<Route
				path='*'
				component={Error404}>
				</Route>
		</Switch>
		)
}

export default ShowContent;