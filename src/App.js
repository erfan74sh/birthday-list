import React, { useState } from "react";
import AppContext from "./context/Context";

import Header from "./components/header";
import Persons from "./components/persons-list/persons-lists";
import NewPerson from "./components/NewPerson";

function App() {
	const [getPersons, setPersons] = useState(
		JSON.parse(localStorage.getItem("persons")) || []
	);
	const [getNewName, setNewName] = useState("");
	const [getNewDate, setNewDate] = useState("");
	const [newImageURL, setNewImageURL] = useState("");

	localStorage.setItem("persons", JSON.stringify(getPersons));

	const handleNewName = (event) => {
		const val = event.target.value;
		if (val && val !== " ") {
			setNewName(val);
		}
	};

	const handleNewDate = (event) => {
		const val = event.target.value;
		setNewDate(val);
	};

	const handleNewUrl = (event) => {
		setNewImageURL(URL.createObjectURL(event.target.files[0]));
	};

	const addNewPerson = () => {
		const newPerson = {
			fullName: getNewName,
			birthdayDate: getNewDate,
			id: Math.floor(Math.random() * 1000),
			imgURL: newImageURL,
		};
		const persons = getPersons;
		persons.push(newPerson);
		setPersons(persons);
		setNewDate("");
		setNewName("");
		setNewImageURL("");
	};

	const handleDeletePerson = (id) => {
		const allPersons = getPersons;
		setPersons(allPersons.filter((person) => person.id !== id));
	};

	return (
		<AppContext.Provider
			value={{
				persons: getPersons,
				newName: getNewName,
				newDate: getNewDate,
				newImageURL: newImageURL,
				handleNewName: handleNewName,
				handleNewDate: handleNewDate,
				handleNewUrl: handleNewUrl,
				addNewPerson: addNewPerson,
				handleDeletePerson: handleDeletePerson,
			}}
		>
			<div className="App">
				<div className="container">
					<Header />
					<NewPerson />
					<Persons />
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
