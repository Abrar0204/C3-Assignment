import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav-left">
				<div to="/" className="logo">
					Brilliant
				</div>

				<Link to="/">Today</Link>

				<Link to="/" className="selected">
					Courses
				</Link>

				<Link to="/">Practice</Link>
			</div>
			<div className="nav-right">
				<div className="button blue">Login</div>
				<div className="button filled blue">Sign up</div>
			</div>
		</nav>
	);
};

export default Navbar;
