import React, { useState } from "react";
import { puzzle5 } from "../../../data/puzzleData";
const Puzzle5 = ({ setSelectedPuzzle }) => {
	const [puzzle5Data, setPuzzle5Data] = useState(puzzle5);

	const onDragStart = (e, boy) => {
		e.dataTransfer.setData("text/plain", boy.name);
	};
	const onDragOver = e => {
		e.preventDefault();
	};
	const onDropAnswered = (e, index) => {
		const name = e.dataTransfer.getData("text");
		if (name === undefined) {
			return;
		}
		const elem = puzzle5Data.unanswered.find(item => item.name === name);
		if (elem === undefined) {
			const elem = puzzle5Data.answered.find(item => item.name === name);
			setPuzzle5Data(prev => ({
				unanswered: prev.unanswered,
				answered: prev.answered.map((item, ind) =>
					ind === index ? elem : item.name === name ? {} : item
				),
			}));
			return;
		}
		setPuzzle5Data(prev => ({
			unanswered: prev.unanswered.map(item =>
				item.name === name ? {} : item
			),
			answered: prev.answered.map((item, ind) =>
				ind === index ? elem : item
			),
		}));
	};
	const onDropUnAnswered = e => {
		const name = e.dataTransfer.getData("text");
		if (name === undefined) {
			return;
		}
		const elem = puzzle5Data.answered.find(item => item.name === name);
		setPuzzle5Data(prev => ({
			answered: prev.answered.map(item =>
				item.name === name ? {} : item
			),
			unanswered: prev.unanswered.map((item, ind) =>
				(name === "Blake" && ind === 0) ||
				(name === "Pyrrha" && ind === 1) ||
				(name === "Ruby" && ind === 2) ||
				(name === "Weiss" && ind === 3) ||
				(name === "Yang" && ind === 3)
					? elem
					: item
			),
		}));
	};
	const onDropInterchange = (e, index) => {
		const name = e.dataTransfer.getData("text");
		if (name === undefined) {
			return;
		}
		const draggedElem = puzzle5Data.answered.find(
			item => item.name === name
		);
		const droppedElem = puzzle5Data.answered[index];
		console.log(draggedElem, droppedElem);

		//When image dragged from unanswered is dropped on answered block already occupied by image
		if (draggedElem === undefined) {
			const draggedElem = puzzle5Data.unanswered.find(
				item => item.name === name
			);
			setPuzzle5Data(prev => ({
				unanswered: prev.unanswered.map((item, ind) =>
					(droppedElem.name === "Blake" && ind === 0) ||
					(droppedElem.name === "Pyrrha" && ind === 1) ||
					(droppedElem.name === "Ruby" && ind === 2) ||
					(droppedElem.name === "Weiss" && ind === 3) ||
					(droppedElem.name === "Yang" && ind === 3)
						? droppedElem
						: draggedElem.name === item.name
						? {}
						: item
				),
				answered: prev.answered.map((item, ind) =>
					ind === index ? draggedElem : item
				),
			}));
			return;
		}

		//when image image dragged from answered is dropeed on answered block occupied by image
		setPuzzle5Data(prev => ({
			unanswered: prev.unanswered,
			answered: prev.answered.map((item, ind) =>
				ind === index
					? draggedElem
					: item.name === name
					? droppedElem
					: item
			),
		}));
	};

	const resetPuzzle5 = () => {
		setPuzzle5Data(puzzle5);
	};
	return (
		<div className="puzzle 5">
			<p>Five friends competed in a race.</p>
			<ul>
				<li>Pyrrha finished faster than Blake.</li>
				<li>
					The smallest difference in finishing times was between
					Pyrrha and Ruby.
				</li>
				<li>
					The largest difference in finishing times was between Ruby
					and Weiss.
				</li>
				<li>Yang finished either 1st or 3rd.</li>
			</ul>
			<div className="puzzle-answers">
				<div className="description">
					<p>Drag the characters into the dotted boxes.</p>
					<p onClick={resetPuzzle5} className="reset">
						Reset
					</p>
				</div>
				<div className="drop-spot-container">
					{puzzle5Data.answered.map((boys, index) =>
						boys.name ? (
							<div className="drop-spot five" key={boys.name}>
								<div
									className="boys"
									draggable
									onDragStart={e => onDragStart(e, boys)}
									onDragOver={onDragOver}
									onDrop={e => onDropInterchange(e, index)}
								>
									<h3>{boys.name}</h3>
									<img
										draggable="false"
										src={boys.img}
										width="110"
										alt={boys.name}
									/>
								</div>
							</div>
						) : (
							<div
								className={`drop-spot five`}
								key={"boys" + index}
								onDragOver={onDragOver}
								onDrop={e => onDropAnswered(e, index)}
							>
								{index + 1}
							</div>
						)
					)}
				</div>
				<div
					className="draggable-images-container"
					onDragOver={onDragOver}
					onDrop={e => onDropUnAnswered(e)}
				>
					{puzzle5Data.unanswered.map((boys, index) =>
						boys.name ? (
							<div
								key={boys.name}
								className="boys"
								draggable
								onDragStart={e => onDragStart(e, boys)}
							>
								<h3>{boys.name}</h3>
								<img
									draggable="false"
									src={boys.img}
									width="110"
									alt={boys.name}
								/>
							</div>
						) : (
							<div
								className={`drop-spot five`}
								key={"boys" + index}
							>
								Card #{index + 1}
							</div>
						)
					)}
				</div>
				<div className="button-group">
					<div className="button black">Show Explanation</div>
					<div
						className="button filled black"
						onClick={() => setSelectedPuzzle(prev => ++prev)}
					>
						Check Answer
					</div>
				</div>
			</div>
		</div>
	);
};

export default Puzzle5;
