const request = require('supertest');
const app = require('./../../../app');
const axios = require('axios');

test("Create returns 200 status", async () => {
    const response = await axios.post('http://localhost:3000/pokemon',{ pokemon: 'charmander'});
    expect(response.status).toBe(200);
})