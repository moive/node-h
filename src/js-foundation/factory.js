const { getUUID, getAge } = require("../plugins");

const obj = { name: "John", birdhdate: "1981-12-30" };

const buildPerson = ({ name, birdhdate }) => {
	return {
		id: getUUID(),
		name,
		birdhdate,
		age: getAge(birdhdate),
	};
};

const jhon = buildPerson(obj);

console.log(jhon);
