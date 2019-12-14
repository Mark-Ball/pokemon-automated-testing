const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/pokemon', (req, res) => { res.json({ pokemon: 'pikachu' }) });

module.exports = router;