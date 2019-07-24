import { combineReducers } from "redux";
import itemsReducer from "./items";
import peopleReducer from "./people";

// Combined reducers
const rootReducer = combineReducers({ itemsReducer, peopleReducer });

export default rootReducer;
