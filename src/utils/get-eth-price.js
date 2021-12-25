export async function getEthPriceUSD() {
	const url =
		"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
	const options = { method: "GET" };

	const response = await fetch(url, options);
	const data = await response.json();

	return data["USD"];
}
