const pokemon = { pokemon: 'pikachu'};

function index(req, res) {
    res.json(pokemon);
}

function create(req, res) {
    console.log(req.body);
    res.status(200).send();
}

module.exports = {
    index,
    create
}