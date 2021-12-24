import { SET_ADDRESS, SET_BALANCE } from "../constants/action-types";

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

export default setAddress;
