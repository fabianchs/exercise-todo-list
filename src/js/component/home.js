import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

let lista = [
	<div
		className="m-1 border  border-rounded-3 align-items-center"
		id="anchogeneral">
		<div className="row">
			<div className="col-2 d-flex align-items-center">
				<button type="button" className="btn btn-danger m-2">
					<i className="far fa-trash-alt"></i>
				</button>
			</div>
			<div className="col-10 d-flex align-items-center">
				<p>Aqui apareceran tus tareas</p>
			</div>
		</div>
	</div>,
	<div
		className="m-1 border  border-rounded-3 align-items-center"
		id="anchogeneral">
		<div className="row">
			<div className="col-2 d-flex align-items-center">
				<button type="button" className="btn btn-danger m-2">
					<i className="far fa-trash-alt"></i>
				</button>
			</div>
			<div className="col-10 d-flex align-items-center">
				<p>Aqui apareceran tus tareas</p>
			</div>
		</div>
	</div>
];

function Works() {
	return lista;
}

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
				<div className="m-1" id="anchogeneral">
					<button
						type="button"
						className="btn btn-primary "
						id="anchogeneral">
						Agregar
					</button>
				</div>
			</div>

			<div
				className="m-1 border  border-rounded-3 align-items-center"
				id="anchogeneral">
				<div className="row">
					<div className="col-2 d-flex align-items-center">
						<button type="button" className="btn btn-danger m-2">
							<i className="far fa-trash-alt"></i>
						</button>
					</div>
					<div className="col-10 d-flex align-items-center">
						<p>Aqui apareceran tus tareas</p>
					</div>
				</div>
			</div>
			<div>{Home()}</div>
		</div>
	);
}
