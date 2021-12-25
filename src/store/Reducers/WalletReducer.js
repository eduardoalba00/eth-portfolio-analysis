import {
	SET_ADDRESS,
	SET_BALANCE,
	SET_TOTAL_FLOOR,
	SET_TOTAL_BALANCE_ETH,
	SET_TOTAL_BALANCE_USD,
} from "../constants/action-types";

const initialState = {
	address: null,
	balance: 0,
	floor_total: 0,
	total_balance_eth: 0,
	total_balance_usd: 0,
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
		case SET_TOTAL_BALANCE_ETH:
			return {
				...state,
				total_balance_eth: action.payload,
			};
		case SET_TOTAL_BALANCE_USD:
			return {
				...state,
				total_balance_usd: action.payload,
			};
		default:
			return state;
	}
}

export default WalletReducer;
