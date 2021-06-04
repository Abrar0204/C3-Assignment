import React, { useState } from "react";
import CoursesContent from "./components/CoursesContent";
import Header from "./components/Header";
import NextSteps from "./components/NextSteps";

const Courses = () => {
	return (
		<div className="courses">
			<Header />
			<CoursesContent />
			<NextSteps />
		</div>
	);
};

export default Courses;
