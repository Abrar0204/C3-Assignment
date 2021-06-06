import React, { useState } from "react";

const SidebarRight = ({ selectedPuzzle, setSelectedPuzzle }) => {
	const [puzzle2Answer, setPuzzle2Answer] = useState("");
	const [puzzle6Answer, setPuzzle6Answer] = useState("");
	const handleInput = e => {
		const { id, name } = e.target;
		if (name === "puzzle2") {
			setPuzzle2Answer(id);
		}
		if (name === "puzzle6") {
			setPuzzle6Answer(id);
		}
	};
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
			{selectedPuzzle === 2 ? (
				<div className="puzzle-quiz">
					<div className="puzzle-option">
						<div>
							<input
								type="radio"
								id="black"
								name="puzzle2"
								value={puzzle2Answer}
								onChange={handleInput}
							/>
							<label htmlFor="black">Black</label>
						</div>
						<div>
							<input
								type="radio"
								id="white"
								name="puzzle2"
								value={puzzle2Answer}
								onChange={handleInput}
							/>
							<label htmlFor="white">White</label>
						</div>
						<div>
							<input
								type="radio"
								name="puzzle2"
								id="not-enough"
								value={puzzle2Answer}
								onChange={handleInput}
							/>
							<label htmlFor="not-enough">
								There isn't enough information to be certain.
							</label>
						</div>
					</div>
					<div className="puzzle-answer-button">
						<div
							className="button filled black"
							onClick={() => changePuzzle("+")}
						>
							Submit
						</div>
						<div className="button black">Show Explanation</div>
					</div>
				</div>
			) : selectedPuzzle === 3 ? (
				<div className="puzzle-quiz">
					<div className="puzzle-answer-button">
						<div
							className="button filled black"
							onClick={() => changePuzzle("+")}
						>
							Continue
						</div>
					</div>
				</div>
			) : selectedPuzzle === 6 ? (
				<div className="puzzle-quiz">
					<div className="puzzle-option">
						<div>
							<input
								type="radio"
								id="0"
								name="puzzle6"
								value={puzzle6Answer}
								onChange={handleInput}
							/>
							<label htmlFor="0">0</label>
						</div>
						<div>
							<input
								type="radio"
								id="1"
								name="puzzle6"
								value={puzzle6Answer}
								onChange={handleInput}
							/>
							<label htmlFor="1">1</label>
						</div>
						<div>
							<input
								type="radio"
								name="puzzle6"
								id="2"
								value={puzzle6Answer}
								onChange={handleInput}
							/>
							<label htmlFor="2">2</label>
						</div>
						<div>
							<input
								type="radio"
								name="puzzle6"
								id="3"
								value={puzzle6Answer}
								onChange={handleInput}
							/>
							<label htmlFor="3">3</label>
						</div>
					</div>
					<div className="puzzle-answer-button">
						<div
							className="button filled black"
							onClick={() => changePuzzle("+")}
						>
							Submit
						</div>
						<div className="button black">Show Explanation</div>
					</div>
				</div>
			) : (
				<div />
			)}
		</div>
	);
};

export default SidebarRight;
