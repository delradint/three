import types from "./types";

// Initial state for people
const INITIAL_STATE = {
	people: ["Laszlo", "John", "Sarah"]
};

// "people" reducer function to dispatch actions
const peopleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_PERSON:
			return {
				...state,
				people: [...state.people, action.person]
			};
		case types.RESET_PEOPLE:
			return {
				...state,
				people: []
			};
		default:
			return state;
	}
};

export default peopleReducer;
