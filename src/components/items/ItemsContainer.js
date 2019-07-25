import React from "react";
import { connect } from "react-redux";

const ItemsContainer = props => (
	<ul>
		{props.items.items.map(item => (
			// props.items is name of state container
			//           .items is name of a variable containing items' names like "Pencil", "Mug"...
			<li key={item}>{item}</li>
		))}
	</ul>
);

// A way to map state from Redux store to component's properties
const mapStateToProps = state => ({
	items: state.items // state.items is renamed itemsReducer in reducers.js file
});

// mapStateToProps + action dispatcher which is not needed in container
export default connect(
	mapStateToProps,
	{}
)(ItemsContainer);
