const { v4: uuidv4 } = require("uuid");
const getAge = require("get-age");

const obj = { name: "John", birdhdate: "1981-12-30" };

const buildPerson = ({ name, birdhdate }) => {
	return {
		id: uuidv4(),
		name,
		birdhdate,
		age: getAge(birdhdate),
	};
};

const jhon = buildPerson(obj);

console.log(jhon);
