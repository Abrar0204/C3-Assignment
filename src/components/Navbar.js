import React from "react";

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav-left">
				<div className="logo">Brilliant</div>

				<div>Today</div>
				<div className="selected">Courses</div>
				<div>Practice</div>
			</div>
			<div className="nav-right">
				<div>Login</div>
				<div className="signup">Sign up</div>
			</div>
		</nav>
	);
};

export default Navbar;
