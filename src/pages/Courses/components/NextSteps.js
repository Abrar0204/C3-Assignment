import React from "react";

const NextSteps = () => {
	return (
		<div className="next-steps">
			<div className="title">
				<p>Next Steps</p>
			</div>
			<div className="steps">
				<div className="step-1">
					<img
						alt="step-1"
						src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92"
					/>
					<div>
						<h1>Mathematical Fundamentals</h1>
						<p>
							The essential tools for mastering algebra, logic,
							and number theory!
						</p>
					</div>
				</div>
				<div className="step-2">
					<img
						src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92"
						alt="step-2"
					/>

					<div>
						<h1>Computer Science Fundamentals</h1>
						<p>
							Wrap your mind around computational thinking, from
							everyday tasks to algorithms.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NextSteps;
