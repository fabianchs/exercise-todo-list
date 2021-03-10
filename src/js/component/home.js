import React, { useState } from "react";

//create your first component
//hooks son funciones que se extraen

export function Home() {
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [indice, setIndice] = useState("");

	function handleChange(event) {
		setTarea(event.target.value);
	}
	function clic() {
		if (tarea != "") {
			if (tareas.lenght == 0) {
				setTareas(tareas.push(tarea));
			} else {
				setTareas(tareas.concat(tarea));
			}
		}
	}

	function borrar(index) {
		//tareas.splice(index);
		setIndice(tareas.splice(index, 1));
	}

	const taskItems = tareas.map((item, index) => (
		<div key={index} className="row">
			<div className="col-2 d-flex align-items-center">
				<button
					onClick={() => {
						borrar(index);
					}}
					type="button"
					className="btn btn-danger m-2">
					<i className="far fa-trash-alt"></i>
				</button>
			</div>
			<div className="col-10 d-flex align-items-center" id="text">
				{item}
			</div>
		</div>
	));

	return (
		<div className="mx-auto" id="anchogeneral">
			<div className=" d-flex justify-content-center" id="anchogeneral">
				<h1 id="title">TODO LIST</h1>
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
				{taskItems}
			</div>
		</div>
	);
}
