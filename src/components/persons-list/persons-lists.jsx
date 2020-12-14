import { useContext } from "react";

import AppContext from "./../../context/Context";

import BdSoon from "./BDSoon";
import BdThreeMounth from "./BDWithinThreeMounth";
import BdLately from "./BDAfterThreeMounth";

function daysLeftToBd(person) {
	const today = new Date();
	const birthDate = new Date(Date.parse(person.birthdayDate));
	birthDate.setFullYear(today.getFullYear() + 1);
	const daysLeft = Math.floor(
		((birthDate.getTime() - today.getTime()) / (60 * 60 * 24 * 1000)) % 365
	);
	return daysLeft;
}

function isBdSoon(person) {
	return daysLeftToBd(person) <= 30;
}

function isBdThreeMounth(person) {
	return daysLeftToBd(person) > 30 && daysLeftToBd(person) <= 90;
}

function isBdLately(person) {
	return daysLeftToBd(person) > 90;
}

function Persons() {
	const context = useContext(AppContext);
	const { persons } = context;

	const bdSoon = persons.filter(isBdSoon);
	const bdThreeMounth = persons.filter(isBdThreeMounth);
	const bdLately = persons.filter(isBdLately);

	return (
		<div className={"persons-list"}>
			{bdSoon.length > 0 ? <BdSoon list={bdSoon} /> : null}
			{bdThreeMounth.length > 0 ? <BdThreeMounth list={bdThreeMounth} /> : null}
			{bdLately.length > 0 ? <BdLately list={bdLately} /> : null}
		</div>
	);
}

export default Persons;
