import React, { useState } from "react";
import PropTypes from "prop-types";

export function List(props) {
	const [verBorrar, setVerBorrar] = useState("d-none");
	return (
		<li className="list-group-item d-flex justify-content-between">
			<p className="mb-0">{props.tareasPendientes}</p>
			<div
				onClick={() => props.borrarIDElement(props.idBorrar)}
				className="cursor-pointer text-danger">
				<i className="far fa-trash-alt"></i>
			</div>
		</li>
	);
}
List.propTypes = {
	tareasPendientes: PropTypes.string,
	idBorrar: PropTypes.number,
	borrarIDElement: PropTypes.func
};
