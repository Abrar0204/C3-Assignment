import React from "react";
import { useHistory } from "react-router";

const CourseCard = ({ course }) => {
	const { title, description } = course;
	const history = useHistory();
	const goToCourse = () => {
		history.push("/course");
	};
	return (
		<div className="course-card" onClick={goToCourse}>
			<img
				src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png"
				width="280"
				alt={title}
			/>
			<h2>{title}</h2>
			<p>{description}</p>
			<div className="line"></div>
		</div>
	);
};

export default CourseCard;
