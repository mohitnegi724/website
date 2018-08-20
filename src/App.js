import React, { Component } from 'react';
import ShowContent from './Components/ShowContent/ShowContent';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

export default class App extends Component {
  state={
        showFooter:true,
  };
  FooterHandler=()=>{
    let CurrentshowFooterStatus = this.state.showFooter;
    this.setState({
      showFooter:!CurrentshowFooterStatus
    })
  }
  render() {
    return (
      <div className="MainBody">
        <Header/>
        <ShowContent/>
        <div className="FooterArea">
          <div className="ToggleFooter" onClick={this.FooterHandler}>
            <p className="ToggleFooterText">Let's Be Friends</p>
          </div>
          {this.state.showFooter?<div><Footer/></div>:null}
        </div>        
      </div>
    );
  }
}

