import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="mx-auto" id="anchogeneral">
			<div className=" d-flex justify-content-center" id="anchogeneral">
				<h1>TODO LIST</h1>
			</div>

			<div>
				<div className="m-1" id="anchogeneral">
					<input
						type="text"
						className="form-control"
						placeholder="Inserta tu tarea"
						aria-label="Username"
					/>
				</div>
				<div className="bg-secondary m-1" id="anchogeneral">
					<button
						type="button"
						className="btn btn-primary "
						id="anchogeneral">
						Enviar
					</button>
				</div>
			</div>
			<div className="bg-warning m-1" id="anchogeneral">
				<ul className="list-group ">
					<li className="list-group-item list-group-item-secondary align-items-center">
						<button type="button" className="btn btn-danger m-2">
							<i className="far fa-trash-alt"></i>
						</button>
						<h5>Aquí aparecerán tus tareas</h5>
					</li>
				</ul>
			</div>
		</div>
	);
}
