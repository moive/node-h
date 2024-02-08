// const { emailTemlate } = require("./js-foundation/template");
// require("./js-foundation/destructuring");
// const { getUserById } = require("./js-foundation/callback");
// const { getUserById } = require("./js-foundation/arrow");
// require("./src/js-foundation/factory");
// require("./src/js-foundation/promises")
const { buildLogger } = require("./src/plugins");
const logger = buildLogger('index.js');
logger.log('Hello world 😀')
logger.error('This is a fixed error')
// const id = 1;

// getUserById(id, (error, user)=> {
// 	if (error) throw new Error(error);
// 	console.log(user);
// });
