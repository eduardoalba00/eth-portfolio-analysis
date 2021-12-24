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
