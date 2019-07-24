import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore, combineReducers, bindActionCreators } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Initial state for items
const initialItems = {
	name: "Favourite",
	items: ["Pencil", "Mug", "Pen"]
};

// Initial state for people
const initialPeople = {
	people: ["Laszlo", "John", "Sarah"]
};

// "items" reducer function to dispatch actions
function items(state = initialItems, action) {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				items: [...state.items, action.item]
			};
		case "RESET_ITEMS":
			return {
				...state,
				items: []
			};
		default:
			return state;
	}
}

// "people" reducer function to dispatch actions
function people(state = initialPeople, action) {
	switch (action.type) {
		case "ADD_PERSON":
			return {
				...state,
				people: [...state.people, action.person]
			};
		case "RESET_PEOPLE":
			return {
				...state,
				people: []
			};
		default:
			return state;
	}
}

// Action object with included payload
// {
//   type: 'ADD', item: 'Scissors'
// }

// Combined reducers
const allReducers = combineReducers({ items, people });

// Store for current state
const store = createStore(allReducers, composeWithDevTools());

// Action creator
const addItem = item => ({ type: "ADD_ITEM", item });
const reset = () => ({ type: "RESET_ITEMS" });

// Dispatch action object - 1st way
store.dispatch(addItem("Pendrive"));

// Action dispatcher binded with "store.dispatch" for cleaner look
const itemActions = bindActionCreators({ add: addItem, reset }, store.dispatch);
itemActions.add("Ruller");
itemActions.reset();

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
