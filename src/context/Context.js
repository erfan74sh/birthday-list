import { createContext } from "react";

const AppContext = createContext({
	persons: [],
	newName: "",
	newDate: "",
	newImageURL: "",
	handleNewName: () => {},
	handleNewDate: () => {},
	handleNewUrl: () => {},
	addNewPerson: () => {},
	handleDeletePerson: () => {},
});
export default AppContext;
