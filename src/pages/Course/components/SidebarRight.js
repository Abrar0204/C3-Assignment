import React from "react";

const SidebarRight = ({ selectedPuzzle, setSelectedPuzzle }) => {
	const changePuzzle = e => {
		if (e === "+") {
			if (selectedPuzzle + 1 > 6) return;
			return setSelectedPuzzle(prev => ++prev);
		} else if (e === "-") {
			if (selectedPuzzle - 1 < 1) return;
			return setSelectedPuzzle(prev => --prev);
		}
		const index = parseInt(e.target.getAttribute("data-index"));
		setSelectedPuzzle(index);
	};
	return (
		<div className="sidebar-right">
			<h1>Warmup Puzzles</h1>
			<div className="puzzle-switcher">
				<div className="switcher" onClick={() => changePuzzle("-")}>
					<i className="arrow left" />
				</div>
				<div className="puzzle-buttons">
					<div
						className={`puzzle-button ${
							selectedPuzzle === 1 ? "selected" : ""
						}`}
						data-index="1"
						onClick={changePuzzle}
					/>
					<div
						className={`puzzle-button ${
							selectedPuzzle === 2 ? "selected" : ""
						}`}
						data-index="2"
						onClick={changePuzzle}
					/>
					<div
						className={`puzzle-button ${
							selectedPuzzle === 3 ? "selected" : ""
						}`}
						data-index="3"
						onClick={changePuzzle}
					/>
					<div
						className={`puzzle-button ${
							selectedPuzzle === 4 ? "selected" : ""
						}`}
						data-index="4"
						onClick={changePuzzle}
					/>
					<div
						className={`puzzle-button ${
							selectedPuzzle === 5 ? "selected" : ""
						}`}
						data-index="5"
						onClick={changePuzzle}
					/>
					<div
						className={`puzzle-button ${
							selectedPuzzle === 6 ? "selected" : ""
						}`}
						data-index="6"
						onClick={changePuzzle}
					/>
				</div>
				<div className="switcher" onClick={() => changePuzzle("+")}>
					<i className="arrow right" />
				</div>
			</div>
		</div>
	);
};

export default SidebarRight;
