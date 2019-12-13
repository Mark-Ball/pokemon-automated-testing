const mongoose = require('mongoose');
const PokemonSchema = require('./../schemas/pokemon_schema');

const PokemonModel = mongoose.model('pokemon', PokemonSchema);

module.exports = PokemonModel;