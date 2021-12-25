import moment from "moment";
import { formatEther } from "@ethersproject/units";

// ----------------------------------------------------------------------
let monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const API_KEY = "JFM3NRUIS89UW4BVK9MPA9349TU6628Q67";
const now = new Date();
const today = now.getDate();
const month = monthNames[now.getMonth()];
// ----------------------------------------------------------------------

function computeTime(timestamp) {
	const time = moment.unix(parseInt(timestamp));
	return time.toString();
}

export async function getDailyExpenditure(addr) {
	let dailyTransactions = [];
	let dailyExpenditure = 0;
	const url =
		"https://api.etherscan.io/api?module=account" +
		"&action=txlist" +
		"&address=" +
		addr +
		"&sort=desc" +
		"&apikey=" +
		API_KEY;
	const options = { method: "GET" };

	const response = await fetch(url, options);
	const data = await response.json();
	const transactions = data["result"];

	for (let i = 0; i < transactions.length; i++) {
		const currTransaction = transactions[i];
		const time = computeTime(currTransaction["timeStamp"]);
		const time_elements = time.split(" ");
		const tsx_day = time_elements[2];
		const tsx_month = time_elements[1];

		if (tsx_day == today && tsx_month == month) {
			dailyTransactions.push(currTransaction);
		}
	}

	for (let i = 0; i < dailyTransactions.length; i++) {
		const tsx = dailyTransactions[i];
		if (tsx["from"].toLowerCase() == addr.toLowerCase()) {
			dailyExpenditure +=
				parseInt(tsx["cumulativeGasUsed"]) + parseInt(tsx["value"]);
		}
	}

	return parseFloat(formatEther(dailyExpenditure));
}

export async function getDailyIncome(addr) {}

export async function getDailyProfit(addr) {}

export async function getWeeklyExpenditure(addr) {}

export async function getWeeklyIncome(addr) {}

export async function getWeeklyProfit(addr) {}
