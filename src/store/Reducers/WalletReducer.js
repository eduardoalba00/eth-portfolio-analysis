import { SET_ADDRESS, SET_BALANCE } from "../constants/action-types";

const initialState = {
	address: null,
	balance: 0,
};

function WalletReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ADDRESS:
			return {
				...state,
				address: action.payload,
			};
		case SET_BALANCE:
			return {
				...state,
				balance: action.payload,
			};
		default:
			return state;
	}
}

export default WalletReducer;
