const { getUUID, getAge } = require("../plugins");

const obj = { name: "John", birdhdate: "1981-12-30" };

const { buildMakePerson } = require("./buildMakePerson");

const makePerson = buildMakePerson({ getUUID, getAge });

const john = makePerson(obj);

console.log({ john });