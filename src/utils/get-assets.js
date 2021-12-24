export async function getFloorTotal(addr) {
	let floor_total = 0;

	const url =
		"https://api.opensea.io/api/v1/assets?owner=" +
		addr +
		"&order_direction=desc&offset=0";
	const options = { method: "GET" };

	const response = await fetch(url, options);
	const data = await response.json();
	const assets = data["assets"];

	for (let i = 0; i < assets.length; i++) {
		let collection_slug = assets[i]["collection"]["slug"];
		const collection_url =
			"https://api.opensea.io/api/v1/collection/" + collection_slug;

		const collection_response = await fetch(collection_url, options);
		const collection_data = await collection_response.json();
		const floor_price =
			collection_data["collection"]["stats"]["floor_price"];
		floor_total += floor_price;
	}
	return floor_total;
}

export async function getCollectionStats(addr) {
	let collections = [];
	const url =
		"https://api.opensea.io/api/v1/assets?owner=" +
		addr +
		"&order_direction=desc&offset=0";
	const options = { method: "GET" };

	const response = await fetch(url, options);
	const data = await response.json();
	const assets = data["assets"];

	for (let i = 0; i < assets.length; i++) {
		let collection_slug = assets[i]["collection"]["slug"];
		const collection_url =
			"https://api.opensea.io/api/v1/collection/" + collection_slug;

		const collection_response = await fetch(collection_url, options);
		const collection_data = await collection_response.json();
		const collection_stats = collection_data["collection"]["stats"];

		const name = collection_data["collection"]["name"];
		const floor_price = collection_stats["floor_price"];
		const avg_price = collection_stats["average_price"];
		const one_day_change = collection_stats["one_day_change"];
		const one_day_volume = collection_stats["one_day_volume"];

		let collection = {
			name,
			floor_price,
			avg_price,
			one_day_change,
			one_day_volume,
		};
		collections.push(collection);
	}
	return collections;
}
