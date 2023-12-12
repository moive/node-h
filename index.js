// const { emailTemlate } = require("./js-foundation/template");
// require("./js-foundation/destructuring");
const { getUserById } = require("./js-foundation/callback");

const id = 1;

getUserById(id, function (error, user) {
	if (error) {
		throw new Error(error);
	}
	console.log(user);
});
