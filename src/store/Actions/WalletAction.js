import {
	SET_ADDRESS,
	SET_BALANCE,
	SET_TOTAL_FLOOR,
} from "../constants/action-types";

export const setAddress = (address) => {
	return {
		type: SET_ADDRESS,
		payload: address,
	};
};
export const setBalance = (balance) => {
	return {
		type: SET_BALANCE,
		payload: balance,
	};
};
export const setTotalFloor = (total_floor) => {
	return {
		type: SET_TOTAL_FLOOR,
		payload: total_floor,
	};
};

export default setAddress;
