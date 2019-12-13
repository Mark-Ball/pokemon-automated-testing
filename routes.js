const express = require('express');
const router = express.Router();

router.get('/pokemon', (req, res) => { res.json({ pokemon: 'pikachu' }) });

module.exports = router;