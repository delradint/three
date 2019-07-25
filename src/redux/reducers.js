import { combineReducers } from "redux";
import itemsReducer from "./items";
import peopleReducer from "./people";

// Combined reducers
const rootReducer = combineReducers({
	items: itemsReducer,
	people: peopleReducer
});

export default rootReducer;
