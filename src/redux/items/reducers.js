import types from "./types";

// Initial state for items
const INITIAL_STATE = {
	name: "Favourite",
	items: ["Pencil", "Mug", "Pen"]
};

// "items" reducer function to dispatch actions
const itemsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.item]
			};
		case types.RESET_ITEMS:
			return {
				...state,
				items: []
			};
		default:
			return state;
	}
};

export default itemsReducer;
