import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component{
	render(){
		return (
		<div className="Footer">
			<div className="OurSocialMedia">
				<a href="https://www.instagram.com/uttarakhandtheheaven" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1534866337/Icons/Insta.png" alt="Insta"/></a>
				<a href="https://www.facebook.com/uktheheaven" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1534866335/Icons/fb.png" alt="Fb"/></a>
				<a href="mailto:theheavenuttarakhand@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1534866335/Icons/mail.png" alt="Email"/></a>
			</div>
			<div className="shortDesc">
				<p>Made With Love In High Hills Of Uttarakhand - The Heaven</p>
			</div>
		</div>
		)
	}
}