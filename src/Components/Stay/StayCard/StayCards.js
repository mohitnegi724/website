import React, { Component } from 'react';
import StayCard from './StayCard';
import './StayCard.css';

export default class StayCards extends Component{
	constructor(props){
		super(props);
		this.state={
			Stay:[
			{StayName: "Walnut Grove Resort & Spa",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"jw-marriott-mussoorie-walnut-grove-resort-spa",
			  StayImage:"https://goo.gl/iUygeu"},
			{StayName: "WelcomHotel The Savoy",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"welcomHotel-the-savoy",
			  StayImage:"https://goo.gl/iTvros"},
			{StayName: "Hotel Vishnu Palace",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-vishnu-palace",
			  StayImage:"https://goo.gl/8KBEHp"},
			{StayName: "Hotel Imperial Square",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-imperial-square",
			  StayImage:"https://goo.gl/X1k6DF"},
			{StayName: "Hotel Highland",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-highland",
			  StayImage:"https://goo.gl/vyiEs7"},
			{StayName: "EllBee",
			  StayRating:3.9,
			  StayLocation:"Rishikesh",
			  StayKey:"elleee",
			  StayImage:"https://goo.gl/qcKEZm"},
			{StayName: "Mosaic Hotel",
			  StayRating:4.8,
			  StayLocation:"Mussoorie",
			  StayKey:"mosaic-hotel",
			  StayImage:"https://goo.gl/CUaJDX"},
			{StayName: "Ilbert Manor",
			  StayRating:4.6,
			  StayLocation:"Mussoorie",
			  StayKey:"ilbert-manor",
			  StayImage:"https://goo.gl/KucDbq"},
			{StayName: "Whispering Windows",
			  StayRating:4.2,
			  StayLocation:"Mussoorie",
			  StayKey:"whispering-windows",
			  StayImage:"https://goo.gl/xVZB8T"},
			{StayName: "Hotel Nand Residency",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-nand-residency",
			  StayImage:"https://goo.gl/ZpdtqZ"},
			{StayName: "Hotel Mayur",
			  StayRating:4.2,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-mayur",
			  StayImage:"https://goo.gl/i6Syiq"},
			{StayName: "Hotel Pavilion",
			  StayRating:4.1,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-pavilion",
			  StayImage:"https://goo.gl/rzfQkY"}
			],
			ratingImage:"https://png.icons8.com/color/1600/star.png",
		}
	}
	renderStays=()=>{
		let StaysArray = this.state.Stay;
		return StaysArray.map((Stay, Index)=>{
			return <StayCard
			rating={this.state.ratingImage}
			StayId = {Stay.StayKey}
			stayName={Stay.StayName}
			imageSource={Stay.StayImage}
			stayRating={Stay.StayRating}
			stayLocation={Stay.StayLocation}/>
		})
	}
	render(){
		return(
				<div className="StayContainer">
					{this.renderStays()}
				</div>
			)
	}
}