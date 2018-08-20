import React, {Component} from 'react';
import FoodCards from './../FoodCard/FoodCards'
import './OpenFoodCard.css';
const OpenFoodCard=(props)=>{
	return(
		<div className="MainContainer">
			<div className="BlurryBGDiv">
				<img alt={this.props.title} src={this.props.mainImage} className="BlurryBGImage"/>
			</div>
			<div className="CardDetailContainer">
				<img alt={this.props.title} className="mainRestaurantImage" src={this.props.mainRestaurantImage}/>
				<div className="TitleFormat">
					<img src={this.props.RestaurantType} alt={this.props.title} className="RestaurantType"/>
					<h3 className="CardTitle">{this.props.title}</h3>
				</div>
				<p className="CardTitleRestaurantAddress">{this.props.RestaurantAddress}</p>
				<div className="RestaurantSocialMedia">
					<a href={this.props.RestaurantFacebook} target="_blank"><img src="https://goo.gl/zMmnZJ" alt="Facebook"/></a>
					<a href={this.props.RestaurantInstagram} target="_blank"><img src="https://goo.gl/DCRW9u" alt="Instagram"/></a>
					<a href={this.props.RestaurantWeb} target="_blank"><img src="https://goo.gl/rUdcCn" alt="Website"/></a>
					<p className="RestaurantContact">{this.props.RestaurantContact}</p>
				</div>
				<div className="MustTryDishes">
					<h4 className="RestaurantMustTryTitle">Must Try</h4>
					<p className="RestaurantMustTry">{this.props.RestaurantMustTry}</p>
				</div>
				<div className="RestaurantServices">
					<div className="RestaurantService">
						<p className="ServiceName">Dine In</p>
						<p className="ServiceCheck">{this.props.RestaurantDineService}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Air Conditioned</p>
						<p className="ServiceCheck">{this.props.RestaurantAC}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Bar</p>
						<p className="ServiceCheck">{this.props.RestaurantBar}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Outdoor Area</p>
						<p className="ServiceCheck">{this.props.RestaurantOutdoorArea}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Online Booking</p>
						<p className="ServiceCheck">{this.props.RestaurantBooking}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Smoking</p>
						<p className="ServiceCheck">{this.props.RestaurantSmoking}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Food Type</p>
						<p className="ServiceCheck">{this.props.RestaurantVegNonVeg}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Desserts</p>
						<p className="ServiceCheck">{this.props.RestaurantDessert}</p>
					</div>
				</div>
				<div className="CardDetails">
					<div className="detailSection">
						<img src="https://png.icons8.com/color/50/000000/rupee.png" alt="Meal Price"/>
						<p>{this.props.MealPrice}</p>
					</div>
					<div className="detailSection">
						<img src="https://png.icons8.com/ios/50/000000/clock-filled.png" alt="Meal Price"/>
						<p>{this.props.RestaurantTimings}</p>
					</div>
					<div className="detailSection mapSection">
						<img src="https://png.icons8.com/color/50/000000/google-maps.png" alt="Map"/>
						<p>Map</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default OpenFoodCard