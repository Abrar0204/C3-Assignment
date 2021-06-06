import React, { useState } from "react";
import { puzzle4 } from "../../../data/puzzleData";
const Puzzle4 = () => {
	const [puzzle4Data, setPuzzle4Data] = useState(puzzle4);

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
		const elem = puzzle4Data.unanswered.find(item => item.name === name);
		if (elem === undefined) {
			const elem = puzzle4Data.answered.find(item => item.name === name);
			setPuzzle4Data(prev => ({
				unanswered: prev.unanswered,
				answered: prev.answered.map((item, ind) =>
					ind === index ? elem : item.name === name ? {} : item
				),
			}));
			return;
		}
		setPuzzle4Data(prev => ({
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
		const elem = puzzle4Data.answered.find(item => item.name === name);
		setPuzzle4Data(prev => ({
			answered: prev.answered.map(item =>
				item.name === name ? {} : item
			),
			unanswered: prev.unanswered.map((item, ind) =>
				(name === "Ace" && ind === 0) ||
				(name === "King" && ind === 1) ||
				(name === "Queen" && ind === 2) ||
				(name === "Jack" && ind === 3)
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
		const draggedElem = puzzle4Data.answered.find(
			item => item.name === name
		);
		const droppedElem = puzzle4Data.answered[index];
		console.log(draggedElem, droppedElem);

		//When image dragged from unanswered is dropped on answered block already occupied by image
		if (draggedElem === undefined) {
			const draggedElem = puzzle4Data.unanswered.find(
				item => item.name === name
			);
			setPuzzle4Data(prev => ({
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
		setPuzzle4Data(prev => ({
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

	const resetPuzzle4 = () => {
		setPuzzle4Data(puzzle4);
	};
	return (
		<div className="puzzle 4">
			<p>Arrange the cards to make the following true:</p>
			<ul>
				<li>The king is in one of the two middle spaces.</li>
				<li>The queen is left of the jack and right of the ace.</li>
				<li>The ace is directly next to the queen.</li>
			</ul>
			<p>(Note: Left and right are from the player's perspective).</p>
			<div className="puzzle-answers">
				<div className="description">
					<p>Drag the characters into the dotted boxes.</p>
					<p onClick={resetPuzzle4} className="reset">
						Reset
					</p>
				</div>
				<div className="drop-spot-container">
					{puzzle4Data.answered.map((boys, index) =>
						boys.name ? (
							<div className="drop-spot four" key={boys.name}>
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
								className={`drop-spot four`}
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
					{puzzle4Data.unanswered.map((boys, index) =>
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
								className={`drop-spot four`}
								key={"boys" + index}
							>
								Card #{index + 1}
							</div>
						)
					)}
				</div>
				<div className="button-group">
					<div className="button black">Show Explanation</div>
					<div className="button filled black">Check Answer</div>
				</div>
			</div>
		</div>
	);
};

export default Puzzle4;
