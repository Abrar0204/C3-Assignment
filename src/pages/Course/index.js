import React, { useState } from "react";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

const Course = () => {
	const [selectedPuzzle, setSelectedPuzzle] = useState(1);

	const [puzzleData, setPuzzleData] = useState([
		{
			name: "Joseph",
			img: "https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png",
			category: "unselected",
		},
		{
			name: "Kevin",
			img: "https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png",
			category: "unselected",
		},
		{
			name: "Nicholas",
			img: "https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png",
			category: "unselected",
		},
	]);
	const [imageSelected, setImageSelected] = useState({
		selected: [],
		unselected: puzzleData,
	});

	const onDragStart = (ev, id) => {
		console.log("dragstart:", id);
		ev.dataTransfer.setData("id", id);
	};

	const onDragOver = ev => {
		ev.preventDefault();
	};

	const onDrop = (ev, cat) => {};
	return (
		<div className="course">
			<SidebarLeft />
			<div className="content">
				{selectedPuzzle === 1 ? (
					<div className="puzzle 1">
						<p>
							Joseph, Kevin, and Nicholas are 3 brothers, and the
							following statements about them are all true:
						</p>
						<ul>
							<li>Joseph is not the youngest.</li>
							<li>Kevin is the oldest.</li>
							<li>Nicholas is not the oldest.</li>
						</ul>
						<div className="puzzle-answers">
							<p>Drag the characters into the dotted boxes.</p>
							<div className="drop-spot-container">
								<div
									className="drop-spot 1"
									onDragOver={e => this.onDragOver(e)}
									onDrop={e => {
										this.onDrop(e, "wip");
									}}
								>
									{imageSelected.selected[0]
										? imageSelected.selected[0]
										: "Youngest"}
								</div>
								<div
									className="drop-spot 2"
									onDragOver={e => this.onDragOver(e)}
									onDrop={e => {
										this.onDrop(e, "wip");
									}}
								></div>
								<div
									className="drop-spot 3"
									onDragOver={e => this.onDragOver(e)}
									onDrop={e => {
										this.onDrop(e, "wip");
									}}
								>
									{imageSelected.selected[2]
										? imageSelected.selected[2]
										: "Oldest"}
								</div>
							</div>
							<div className="draggable-images-container">
								{puzzleData.map(boys => (
									<div
										className="boys"
										draggable
										onDragStart={e =>
											this.onDragStart(e, boys.img)
										}
									>
										<h3>{boys.name}</h3>
										<img
											src={boys.img}
											width="150"
											alt={boys.name}
										/>
									</div>
								))}
							</div>
							<div className="button-group">
								<div className="button black">
									Show Explanation
								</div>
								<div className="button filled black">
									Check Answer
								</div>
							</div>
						</div>
					</div>
				) : selectedPuzzle === 2 ? (
					<div className="puzzle 2">
						<img
							src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/TvY8JiPVvOPqN1nhUDFL6d-Course-Logic-Reillustrated-1571-95-OYBsYF.png?width=480"
							alt="puzzle-2"
						/>
						<p>
							One of the women above is named Kaylee and the other
							is named Inara. They each make a statement about who
							they are as shown.
						</p>

						<p>
							We know that at least one of them is lying. What
							color is Inara's dress?
						</p>
					</div>
				) : selectedPuzzle === 3 ? (
					<div className="puzzle 3">
						<img
							src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/TvY8JiPVvOPqN1nhUDFL6d-Course-Logic-Reillustrated-1172-21754-irYAOI.png?width=400"
							alt="puzzle-3"
						/>
						<p>
							The next three problems gradually increase in
							difficulty, and all of them are more challenging
							than the warm-ups you just solved.
						</p>
						<p>
							It's worth the effort. The most effective learning
							experiences are often those times when you get a
							problem wrong, and then challenge yourself to read,
							understand, and learn from the solution.
						</p>
					</div>
				) : selectedPuzzle === 4 ? (
					<div className="puzzle 4">
						<p>Arrange the cards to make the following true:</p>
						<ul>
							<li>
								The king is in one of the two middle spaces.
							</li>
							<li>
								The queen is left of the jack and right of the
								ace.
							</li>
							<li>The ace is directly next to the queen.</li>
						</ul>
						<p>
							(Note: Left and right are from the player's
							perspective).
						</p>
					</div>
				) : selectedPuzzle === 5 ? (
					<div className="puzzle 5">
						<p>Five friends competed in a race.</p>
						<ul>
							<li>Pyrrha finished faster than Blake.</li>
							<li>
								The smallest difference in finishing times was
								between Pyrrha and Ruby.
							</li>
							<li>
								The largest difference in finishing times was
								between Ruby and Weiss.
							</li>
							<li>Yang finished either 1st or 3rd.</li>
						</ul>
					</div>
				) : (
					<div className="puzzle 6">
						<ul>
							<li>
								There is exactly 11 false statement in this
								list.
							</li>
							<li>
								There are exactly 22 false statements in this
								list.
							</li>
							<li>
								There are exactly 33 false statements in this
								list.
							</li>
						</ul>
						<p>
							How many false statements are there in the list
							above?
						</p>
					</div>
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
