import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Person({ fullName, birthdayDate, handleDeletePerson, imgURL }) {
	const today = new Date();
	const birthDate = new Date(Date.parse(birthdayDate));
	birthDate.setFullYear(today.getFullYear() + 1);
	const daysLeft = Math.floor(
		((birthDate.getTime() - today.getTime()) / (60 * 60 * 24 * 1000)) % 365
	);
	let imageDefaultName = "";
	for (let i = 0; i < fullName.split(" ").length; i++) {
		imageDefaultName += fullName.split(" ")[i][0];
	}

	return (
		<div className={"person-container"}>
			<div className={"img-div"}>
				{imgURL !== "" ? (
					<img src={imgURL} alt={fullName}></img>
				) : (
					imageDefaultName
				)}
			</div>
			<div className={"person-div"}>
				<div className={"person-info"}>
					<p>{fullName}</p>
					<p>{birthdayDate}</p>
				</div>
				<div className={"days-left"}>
					<p>{daysLeft}</p>
					<p>{daysLeft > 1 ? "days left" : "day left"}</p>
				</div>
			</div>
			<div className={"icon-div"}>
				<span onClick={handleDeletePerson}>
					<FontAwesomeIcon icon={faTrash} />
				</span>
			</div>
		</div>
	);
}

export default Person;
