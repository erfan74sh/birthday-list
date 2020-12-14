import React, { useState, useContext } from "react";
import AppContext from "../../context/Context";

import Person from "./person-item";

import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function BdLately({ list }) {
	const context = useContext(AppContext);
	const [toggleShow, setToggleShow] = useState(true);

	const handleToggleShow = () => {
		const el = $("#bd-after-three-mounth");
		el.slideToggle();
		setToggleShow(!toggleShow);
	};
	return (
		<div>
			<div>
				<div className={"category-title"} onClick={handleToggleShow}>
					<h4>In future</h4>
					<div className={"category-info"}>
						<p>
							{list.length > 1 ? `(${list.length}) birthdays` : "(1) birthday"}
						</p>
						<FontAwesomeIcon icon={toggleShow ? faAngleUp : faAngleDown} />
					</div>
				</div>
				<div id={"bd-after-three-mounth"}>
					{list.map((person) => (
						<Person
							fullName={person.fullName}
							birthdayDate={person.birthdayDate}
							key={person.id}
							imgURL={person.imgURL}
							handleDeletePerson={() => context.handleDeletePerson(person.id)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default BdLately;
