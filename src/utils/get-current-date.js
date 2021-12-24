export function getCurrentDate(separator = " ") {
	let monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	let newDate = new Date();
	let date = newDate.getDate();
	let month = newDate.getMonth();
	let monthName = monthNames[month];
	let year = newDate.getFullYear();

	return `${monthName} ${date}`;
}
