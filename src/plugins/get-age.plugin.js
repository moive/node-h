const getAgePlugin = require("get-age");

const getAge = (birdhdate) => {
	if (!birdhdate) throw new Error("Birdhdate is required");

	return getAgePlugin(birdhdate);
};

module.exports = {
	getAge,
};
