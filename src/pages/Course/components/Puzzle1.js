import React, { useState } from "react";
import { puzzle1 } from "../../../data/puzzleData";
const Puzzle1 = ({ setSelectedPuzzle }) => {
	const [puzzle1Data, setPuzzle1Data] = useState(puzzle1);

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
		const elem = puzzle1Data.unanswered.find(item => item.name === name);
		//When card from answered is dropped in answered (exchangin in answered)
		if (elem === undefined) {
			const elem = puzzle1Data.answered.find(item => item.name === name);
			setPuzzle1Data(prev => ({
				unanswered: prev.unanswered,
				answered: prev.answered.map((item, ind) =>
					ind === index ? elem : item.name === name ? {} : item
				),
			}));
			return;
		}
		setPuzzle1Data(prev => ({
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
		const elem = puzzle1Data.answered.find(item => item.name === name);
		setPuzzle1Data(prev => ({
			answered: prev.answered.map(item =>
				item.name === name ? {} : item
			),
			unanswered: prev.unanswered.map((item, ind) =>
				(name === "Joseph" && ind === 0) ||
				(name === "Kevin" && ind === 1) ||
				(name === "Nicholas" && ind === 2)
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
		const draggedElem = puzzle1Data.answered.find(
			item => item.name === name
		);
		const droppedElem = puzzle1Data.answered[index];
		console.log(draggedElem, droppedElem);

		//When image dragged from unanswered is dropped on answered block already occupied by image
		if (draggedElem === undefined) {
			const draggedElem = puzzle1Data.unanswered.find(
				item => item.name === name
			);
			setPuzzle1Data(prev => ({
				unanswered: prev.unanswered.map((item, ind) =>
					ind === index ? droppedElem : item.name === name ? {} : item
				),
				answered: prev.answered.map((item, ind) =>
					ind === index ? draggedElem : item
				),
			}));
			return;
		}
		//when image image dragged from answered is dropeed on answered block occupied by image
		setPuzzle1Data(prev => ({
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
	const resetpuzzle1 = () => {
		setPuzzle1Data(puzzle1);
	};
	return (
		<div className="puzzle 1">
			<p>
				Joseph, Kevin, and Nicholas are 3 brothers, and the following
				statements about them are all true:
			</p>
			<ul>
				<li>Joseph is not the youngest.</li>
				<li>Kevin is the oldest.</li>
				<li>Nicholas is not the oldest.</li>
			</ul>
			<div className="puzzle-answers">
				<div className="description">
					<p>Drag the characters into the dotted boxes.</p>
					<p onClick={resetpuzzle1} className="reset">
						Reset
					</p>
				</div>
				<div className="drop-spot-container">
					{puzzle1Data.answered.map((boys, index) =>
						boys.name ? (
							<div className="drop-spot three" key={boys.name}>
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
										width="150"
										alt={boys.name}
									/>
								</div>
							</div>
						) : (
							<div
								className={`drop-spot three`}
								key={"boys" + index}
								onDragOver={onDragOver}
								onDrop={e => onDropAnswered(e, index)}
							>
								{index === 0
									? "Youngest"
									: index === 2
									? "Oldest"
									: ""}
							</div>
						)
					)}
				</div>
				<div
					className="draggable-images-container"
					onDragOver={onDragOver}
					onDrop={e => onDropUnAnswered(e)}
				>
					{puzzle1Data.unanswered.map((boys, index) =>
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
									width="150"
									alt={boys.name}
								/>
							</div>
						) : (
							<div
								className={`drop-spot three`}
								key={"boys" + index}
							>
								Boy #{index + 1}
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

export default Puzzle1;
