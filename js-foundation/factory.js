const { v4: uuidv4 } = require("uuid");

const obj = { name: "John", birdhdate: "1981-12-30" };

const buildPerson = ({ name, birdhdate }) => {
	return {
		id: new Date().getTime(),
		name,
		birdhdate,
		age: new Date().getFullYear() - new Date(birdhdate).getFullYear(),
	};
};

const jhon = buildPerson(obj);

console.log(jhon);
