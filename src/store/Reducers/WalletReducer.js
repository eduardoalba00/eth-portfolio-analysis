import {
	SET_ADDRESS,
	SET_BALANCE,
	SET_TOTAL_FLOOR,
} from "../constants/action-types";

const initialState = {
	address: null,
	balance: 0,
	floor_total: 0,
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
		case SET_TOTAL_FLOOR:
			return {
				...state,
				floor_total: action.payload,
			};
		default:
			return state;
	}
}

export default WalletReducer;
