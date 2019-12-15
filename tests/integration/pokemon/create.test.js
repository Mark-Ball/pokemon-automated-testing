const request = require('supertest');
const app = require('./../../../app');
const axios = require('axios');

describe('create tests', () => {
    const charmanderPost = { pokemon: 'charmander'};

    test("Create returns 200 status", async () => {
        const response = await axios.post('http://localhost:3000/pokemon', charmanderPost);
        expect(response.status).toBe(200);
    })

    test("A post creates the resource", async () => {
        const response = await axios.get('http://localhost:3000/pokemon');
        expect(response.data[response.data.length - 1]).toEqual(charmanderPost);
    })
})