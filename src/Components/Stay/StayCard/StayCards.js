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
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905465/jw-marriott-mussoorie-walnut-grove-resort-spa.jpg"},
			{StayName: "WelcomHotel The Savoy",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"welcomHotel-the-savoy",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905471/welcomHotel-the-savoy.jpg"},
			{StayName: "Hotel Vishnu Palace",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-vishnu-palace",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905466/hotel-vishnu-palace.jpg"},
			{StayName: "Hotel Imperial Square",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-imperial-square",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905474/hotel-imperial-square.jpg"},
			{StayName: "Hotel Highland",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-highland",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905834/hotel-highland.jpg"},
			{StayName: "EllBee",
			  StayRating:3.9,
			  StayLocation:"Rishikesh",
			  StayKey:"ellbee",
			  StayImage: "https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905475/ellbee.jpg"},
			{StayName: "Mosaic Hotel",
			  StayRating:4.8,
			  StayLocation:"Mussoorie",
			  StayKey:"mosaic-hotel",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905469/mosaic-hotel.jpg"},
			{StayName: "Ilbert Manor",
			  StayRating:4.6,
			  StayLocation:"Mussoorie",
			  StayKey:"ilbert-manor",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905469/ilbert-manor.jpg"},
			{StayName: "Whispering Windows",
			  StayRating:4.2,
			  StayLocation:"Mussoorie",
			  StayKey:"whispering-windows",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905474/whispering-windows.jpg"},
			{StayName: "Hotel Nand Residency",
			  StayRating:4.5,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-nand-residency",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905472/hotel-nand-residency.jpg"},
			{StayName: "A Cabin In The Woods",
			  StayRating:4.7,
			  StayLocation:"Mussoorie",
			  StayKey:"a-cabin-in-the-woods",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905475/A_Cabin_In_The_Woods.jpg"},
			{StayName: "Hotel Pavilion",
			  StayRating:4.1,
			  StayLocation:"Mussoorie",
			  StayKey:"hotel-pavilion",
			  StayImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_scale,q_80,w_375/v1534905465/hotel-pavilion.jpg"}
			],
			ratingImage:"https://png.icons8.com/color/1600/star.png",
		}
	}
	renderStays=()=>{
		let StaysArray = this.state.Stay;
		return StaysArray.map((Stay, Index)=>{
			return <StayCard
			key={Stay.StayKey}
			rating={this.state.ratingImage}
			Id= {Stay.StayKey}
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