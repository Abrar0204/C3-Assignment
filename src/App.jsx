import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Course from "./pages/Course";
import Courses from "./pages/Courses";
import "./scss/main.scss";
const App = () => {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" component={Courses} />
					<Route path="/course" component={Course} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
