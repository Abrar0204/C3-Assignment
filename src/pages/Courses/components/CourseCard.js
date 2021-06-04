import React from "react";

const CourseCard = ({ course }) => {
	console.log(course);
	const { title, description } = course;
	return (
		<div className="course-card">
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
