import types from "./types";

// Action creator
const add = item => ({ type: types.ADD_ITEM, item });
const reset = () => ({ type: types.RESET_ITEMS });

export default {
	add,
	reset
};
