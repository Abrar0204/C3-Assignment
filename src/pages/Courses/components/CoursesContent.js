import React, { useState } from "react";
import CourseCard from "./CourseCard";
import coursesData from "../../../data/coursesData";

const CoursesContent = () => {
	const [courseData, setCourseData] = useState(coursesData);

	const toggleShowAllCourses = courseIndex => {
		setCourseData(prev =>
			prev.map((course, index) =>
				index === courseIndex
					? { ...course, showAll: !course.showAll }
					: course
			)
		);
	};

	const showCollapse = (showAll, index) =>
		showAll ? (
			<span onClick={() => toggleShowAllCourses(index)}>Collapse</span>
		) : (
			""
		);

	return (
		<div className="courses-content">
			{courseData.map(
				({ title, description, courses, showAll }, index) => (
					<div className="courses-content-section" key={title}>
						<div className="course-title">
							<div className="id">{index + 1}</div>
							<div className="info">
								<h1>{title}</h1>
								<p>
									{description}.{showCollapse(showAll, index)}
								</p>
							</div>
						</div>
						<div
							className={`course-levels ${
								showAll ? "show" : "hide"
							}`}
						>
							{courses.map(course => (
								<CourseCard
									course={course}
									key={course.title}
								/>
							))}
						</div>

						{courses.length > 3 && (
							<div
								className={`show-all-courses ${
									showAll ? "show" : "hide"
								}`}
								onClick={() => toggleShowAllCourses(index)}
							>
								<i className="arrow down"></i>
							</div>
						)}
					</div>
				)
			)}
		</div>
	);
};

export default CoursesContent;
