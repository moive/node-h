const getPokemonById = require("./apiPokemon");

getPokemonById(3)
	.then((pokemon) => console.log({ pokemon }))
	.catch((err) => console.log({ err: err.message }))
	.finally(() => console.log("Finished processing"));
