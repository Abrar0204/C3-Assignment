import React, { useState } from "react";
import Puzzle1 from "./components/Puzzle1";
import Puzzle2 from "./components/Puzzle2";
import Puzzle3 from "./components/Puzzle3";
import Puzzle4 from "./components/Puzzle4";
import Puzzle5 from "./components/Puzzle5";
import Puzzle6 from "./components/Puzzle6";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

const Course = () => {
	const [selectedPuzzle, setSelectedPuzzle] = useState(1);

	return (
		<div className="course">
			<SidebarLeft />
			<div className="content">
				{selectedPuzzle === 1 ? (
					<Puzzle1 setSelectedPuzzle={setSelectedPuzzle} />
				) : selectedPuzzle === 2 ? (
					<Puzzle2 setSelectedPuzzle={setSelectedPuzzle} />
				) : selectedPuzzle === 3 ? (
					<Puzzle3 setSelectedPuzzle={setSelectedPuzzle} />
				) : selectedPuzzle === 4 ? (
					<Puzzle4 setSelectedPuzzle={setSelectedPuzzle} />
				) : selectedPuzzle === 5 ? (
					<Puzzle5 setSelectedPuzzle={setSelectedPuzzle} />
				) : (
					<Puzzle6 />
				)}
			</div>
			<SidebarRight
				selectedPuzzle={selectedPuzzle}
				setSelectedPuzzle={setSelectedPuzzle}
			/>
		</div>
	);
};

export default Course;
