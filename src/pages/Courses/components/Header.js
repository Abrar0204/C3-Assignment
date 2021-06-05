import React from "react";

const Header = () => {
	return (
		<header className="header">
			<div className="header-left">
				<h1>Logic</h1>
				<h2>
					Stretch your analytic muscles with knights, knaves, logic
					gates, and more!
				</h2>
				<p>
					The beginning of our introductory math journey is Logic.
					Through these challenging problem solving exercises, you'll
					construct the critical thinking skills that are the basis
					for mathematical reasoning.
				</p>
				<p>
					You'll use limited information to make predictions –
					eliminating the impossible to uncover the truth. This course
					builds up to some truly mind-bending challenges!
				</p>

				<button className="anchor">
					View prerequisites and next steps
				</button>
			</div>
			<div className="header-right">
				<img
					src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png"
					width="254"
					alt="header"
				/>
				<div className="stats">
					<div className="stats-1">
						<h3>37</h3>
						<p>Interactive quizzes</p>
					</div>
					<div className="stats-2">
						<h3>265+</h3>
						<p>Concepts and Exercises</p>
					</div>
				</div>
				<button>Start Courses</button>
			</div>
		</header>
	);
};

export default Header;
