import React, { useState } from "react";

//create your first component
//hooks son funciones que se extraen

export function Home() {
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);

	function handleChange(event) {
		//console.log(event.target.value);
		setTarea(event.target.value);
		//console.log(tarea);
	}
	function clic() {
		alert(tarea);
		//setTareas(tareas.push(tarea));

		setTareas(tareas.concat(tarea));

		console.log(tareas);
	}

	const taskItems = tareas.map((item, index) => <li key={index}>{item}</li>);

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
						onChange={handleChange}
					/>
				</div>
				<div className="m-1" id="anchogeneral">
					<button
						type="button"
						className="btn btn-primary "
						onClick={clic}
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
						{taskItems}
					</div>
				</div>
			</div>
		</div>
	);
}
