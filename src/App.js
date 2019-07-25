import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ItemsContainer from "./components/items/ItemsContainer";
import ItemsForm from "./components/items/ItemsForm";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<ItemsContainer />
				<ItemsForm />
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
