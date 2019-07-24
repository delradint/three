import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Initial state
const initialItems = {
	name: "Favourite",
	items: ["Pencil", "Mug", "Pen"]
};

// Reducer function to dispatch actions
function items(state = initialItems, action) {
	switch (action.type) {
		case "ADD":
			return {
				...state,
				items: [...state.items, action.item]
			};
		case "RESET":
			return {
				...state,
				items: []
			};
		default:
			return state;
	}
}

// Action object with included payload
// {
//   type: 'ADD', item: 'Scissors'
// }

// Store for current state
const store = createStore(items, composeWithDevTools());

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
