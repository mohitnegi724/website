import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import './StayCard.css';
export default class StayCard extends Component{
	render(){
		return(
			<Link to={`/dehradun/stay/${this.props.Id}`}>
				<div className="StaycardBody" key={this.props.Id}>
					< img className = "stayImage" alt={this.props.stayName} src={this.props.imageSource}/>
					<div className="NameAndRating">
						<p className="stayName">{this.props.stayName}</p>
						<div className="RatingDiv">
							<img src={this.props.rating} className="ratingStar" alt="Rating"/>
							<p className="stayRating">{this.props.stayRating}</p>
						</div>
					</div>
					<p className="stayLocation">{this.props.stayLocation}</p>
				</div>
			</Link>
			)
	}
}
