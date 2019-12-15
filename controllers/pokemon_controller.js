const pokemon = [
    { pokemon: 'pikachu'}
]

function index(req, res) {
    res.json(pokemon);
}

function create(req, res) {
    pokemon.push(req.body);
    res.json(req.body);
}

module.exports = {
    index,
    create
}