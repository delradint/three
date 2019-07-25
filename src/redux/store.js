import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// Store for current state
const store = createStore(rootReducer, composeWithDevTools());

export default store;
