import React from 'react';
import './Header.css';
import { NavLink} from 'react-router-dom';
const Header=(props)=>{
	return(
		<div className="Header">
			<div className="HeaderBody">
				<div id="logo">
					<img src="https://png.icons8.com/color/1600/alps.png" alt="Logo"/>
				</div>
				<div className="MenuOptions">
					<ul>
						<li><NavLink exact activeClassName="current" to="/"></NavLink></li>
						<li><NavLink exact activeClassName="current" to="/dehradun">Home</NavLink></li>
						<li><NavLink exact activeClassName="current" to="/dehradun/food">Food</NavLink></li>
						<li><NavLink exact activeClassName="current" to="/dehradun/stay">Stay</NavLink></li>
						<li><NavLink exact activeClassName="current" to="/travel">Travel</NavLink></li>
						<div className="fix">
							<li><NavLink exact activeClassName="current" to="/stories">Stories</NavLink></li>
							<li><NavLink exact activeClassName="current" to="/music">Music</NavLink></li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header;