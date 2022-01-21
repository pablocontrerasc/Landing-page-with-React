import { element } from "prop-types";
import React from "react";
import imagen from "../../img/500.jpg";

let item = [
	<div className="col mb-4">
		<div className="card">
			<img src={imagen} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a longer card with supporting text below as a
					natural lead-in to additional content. This content is a
					little bit longer.
				</p>
			</div>
			<div className="card-footer">
				<div className="col v-center">
					<button className="btn btn-primary d-block mx-auto">
						Find Out More!
					</button>
				</div>
			</div>
		</div>
	</div>,
];
let i = 0;
let group = [];
for (i = 0; i < 4; i++) {
	group[i] = item[0];
}

console.log(group);
const Card = () => {
	return <div className="card-group">{group}</div>;
};

export default Card;
