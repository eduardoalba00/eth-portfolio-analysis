import {
	SET_ADDRESS,
	SET_BALANCE,
	SET_TOTAL_FLOOR,
	SET_TOTAL_BALANCE_ETH,
	SET_TOTAL_BALANCE_USD,
	SET_DAILY_EXPENDITURE,
} from "../constants/action-types";

export const setAddress = (address) => {
	return {
		type: SET_ADDRESS,
		payload: address,
	};
};
export const setBalance = (val) => {
	return {
		type: SET_BALANCE,
		payload: val,
	};
};
export const setTotalFloor = (val) => {
	return {
		type: SET_TOTAL_FLOOR,
		payload: val,
	};
};
export const setTotalBalanceETH = (val) => {
	return {
		type: SET_TOTAL_BALANCE_ETH,
		payload: val,
	};
};
export const setTotalBalanceUSD = (val) => {
	return {
		type: SET_TOTAL_BALANCE_USD,
		payload: val,
	};
};
export const setDailyExpenditure = (val) => {
	return {
		type: SET_DAILY_EXPENDITURE,
		payload: val,
	};
};
