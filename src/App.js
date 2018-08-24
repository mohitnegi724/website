import React, { Component } from 'react';
import ShowContent from './Components/ShowContent/ShowContent';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

export default class App extends Component {
  constructor(props){
    console.log("******************************************************App Constructor");
      super(props);
        this.state={
        showFooter:false,
        };
      }
  FooterHandler=()=>{
    let CurrentshowFooterStatus = this.state.showFooter;
    this.setState({
      showFooter:!CurrentshowFooterStatus
    })
  }
  componentWillMount(){
    console.log("******************************************************App Component Will Mount")
  }
  componentDidMount(){
    console.log("******************************************************App Component Did Mount");
  }
  componentWillUnmount(){
    console.log("******************************************************App Component Will UnMount")
  }
  render() {
    console.log("******************************************************App Render")
    return (
      <div className="MainBody">
        <Header/>
        <div style={{paddingTop: 60}}>
        <ShowContent/>
        </div>
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

