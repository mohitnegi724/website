import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './FoodCard.css';
export default class FoodCardRestaurants extends Component {
  render(){
    return(
          <Link to={`/dehradun/food/${this.props.Id}`}>
            <div className="FoodcardBody" key={this.props.Id}>
              <img className="resImage" src={this.props.imageSource} alt={this.props.resName}/>
              <div className="NameAndRating">
                <p className="resName">{this.props.resName}</p>
                <div className="RatingDiv">
                  <img className="ratingStar" src={this.props.rating} alt="ratingStar"/>
                  <p className="resRating">{this.props.resRating}</p>
                </div>
              </div>
              <div className="Bottom">
              <img src={this.props.resType} alt="type" className="resType" onClick={this.props.FilterByResType}/>
              <p className="resLocation" onClick={this.props.FilterByLocation}>{this.props.resLocation}</p>
              <p className="MealPrice">{this.props.MealPrice}</p>
              </div>
            </div>
          </Link>
        )
  }
}
