addEventListener("message", event => {
	const imageDataArray = event.data;

	const set = new Set();

	for (let i = 0; i < imageDataArray.length; i += 4) {
		// Convert color to primitive (ARGB)
		const color =
				(BigInt(imageDataArray[i + 3]) << 8n * 3n) +
				(BigInt(imageDataArray[i]) << 8n * 2n) +
				(BigInt(imageDataArray[i + 1]) << 8n) +
				(BigInt(imageDataArray[i + 2]));

		set.add(color);
	}

	postMessage(set.size);
});