const getPokemonById = require("./apiPokemon");

getPokemonById(2, (pokemon) => {
	console.log(pokemon);
});
