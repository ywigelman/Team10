const api = (img, letter) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const result =
		Math.random() < 0.6
			? letter
			: alphabet[Math.floor(Math.random() * alphabet.length)];
	return result;
};

export default api;
