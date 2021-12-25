import {
	SET_ADDRESS,
	SET_BALANCE,
	SET_TOTAL_FLOOR,
	SET_TOTAL_BALANCE_ETH,
	SET_TOTAL_BALANCE_USD,
	SET_DAILY_EXPENDITURE,
	SET_DAILY_INCOME,
	SET_DAILY_PROFIT,
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
export const setDailyIncome = (val) => {
	return {
		type: SET_DAILY_INCOME,
		payload: val,
	};
};
export const setDailyProfit = (val) => {
	return {
		type: SET_DAILY_PROFIT,
		payload: val,
	};
};
