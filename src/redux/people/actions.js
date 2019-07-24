import types from "./types";

// Action creator
const add = person => ({ type: types.ADD_PERSON, person });
const reset = () => ({ type: types.RESET_PEOPLE });

export default {
	add,
	reset
};
