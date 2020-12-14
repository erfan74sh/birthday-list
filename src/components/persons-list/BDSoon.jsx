import React, { useState, useContext } from "react";
import AppContext from "../../context/Context";

import Person from "./person-item";

import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function BdSoon({ list }) {
	const context = useContext(AppContext);
	const [toggleShow, setToggleShow] = useState(true);

	const handleToggleShow = () => {
		const el = $("#bd-soon-list");
		el.slideToggle();
		setToggleShow(!toggleShow);
	};

	return (
		<div id={"bd-soon"}>
			<div>
				<div className={"category-title"} onClick={handleToggleShow}>
					<h4>In 30 days</h4>
					<div className={"category-info"}>
						<p>
							{list.length > 1 ? `(${list.length}) birthdays` : "(1) birthday"}
						</p>
						<FontAwesomeIcon icon={toggleShow ? faAngleUp : faAngleDown} />
					</div>
				</div>
				<div id="bd-soon-list">
					{list.map((person) => (
						<Person
							fullName={person.fullName}
							birthdayDate={person.birthdayDate}
							key={person.id}
							handleDeletePerson={() => context.handleDeletePerson(person.id)}
							imgURL={person.imgURL}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default BdSoon;
