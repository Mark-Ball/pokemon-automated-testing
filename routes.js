const express = require('express');
const router = express.Router();
const PokemonController = require('./controllers/pokemon_controller');

router.get('/pokemon', PokemonController.index);
router.post('/pokemon', PokemonController.create);

module.exports = router;