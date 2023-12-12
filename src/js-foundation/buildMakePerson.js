const buildMakePerson = ({ getUUID, getAge }) => {
	return ({ name, birdhdate }) => {
		return {
			id: getUUID(),
			name,
			birdhdate,
			age: getAge(birdhdate),
		};
	};
};

module.exports = {
	buildMakePerson,
};
