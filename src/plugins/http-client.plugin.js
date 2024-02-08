const axios = require("axios");

const httpclientPlugin = {
	get: async (url) => {
		const { data } = await axios.get(url);
		// const response = await fetch(url);
		// const data = response.json();
		return data;
	},
	post: async (url, body) => {},
	put: async (url, body) => {},
	delete: async (url, body) => {},
};

module.exports = {
	http: httpclientPlugin,
};
