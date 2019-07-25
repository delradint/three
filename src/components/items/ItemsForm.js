import React from "react";
import { connect } from "react-redux";
import { itemsActions } from "../../redux/items";

const ItemsForm = props => {
	const itemInput = React.createRef();

	const addItem = event => {
		event.preventDefault();
		props.add(itemInput.current.value);

		itemInput.current.value = "";
	};

	return (
		<form onSubmit={addItem}>
			<input ref={itemInput} />
			<button type="submit">ADD</button>
		</form>
	);
};

//  A way to map "dispatch" to component's properties
const mapDispatchToProps = dispatch => ({
	add: item => dispatch(itemsActions.add(item))
});

// null, because connecting the current state is not needed
export default connect(
	null,
	mapDispatchToProps
)(ItemsForm);
