import React from "react";
import { Link } from "react-router-dom";
const SidebarLeft = () => {
	return (
		<div className="sidebar-left">
			<div className="back">
				<Link to="/">&larr; Back</Link>
			</div>
			<div className="sidebar-list">
				<button className="anchor sidebar-list-item">Logic</button>
			</div>
		</div>
	);
};

export default SidebarLeft;
