import { useContext } from "react";
import AppContext from "./../context/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCamera } from "@fortawesome/free-solid-svg-icons";

const NewPerson = () => {
	const {
		handleNewName,
		handleNewDate,
		addNewPerson,
		handleNewUrl,
		newImageURL,
	} = useContext(AppContext);

	const _onFocus = (event) => {
		event.currentTarget.type = "date";
	};
	const _onBlur = (event) => {
		event.currentTarget.type = "text";
	};

	return (
		<form id="new-person-form">
			<label htmlFor="img-input">
				{newImageURL !== "" ? (
					<img src={newImageURL} alt="profile" />
				) : (
					<FontAwesomeIcon icon={faCamera} />
				)}
			</label>
			<input type="file" id="img-input" onChange={handleNewUrl} />
			<div id={"name-date-div"}>
				<input
					type="text"
					placeholder="Fullname"
					onChange={handleNewName}
					required
				/>
				<input
					type="text"
					placeholder="Birthday Date"
					onFocus={_onFocus}
					onBlur={_onBlur}
					onChange={handleNewDate}
					required
				/>
			</div>
			<button type="reset" onClick={addNewPerson}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</form>
	);
};

export default NewPerson;
