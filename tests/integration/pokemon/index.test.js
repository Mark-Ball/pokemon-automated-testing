const request = require('supertest');
const app = require('./../../../app');
const axios = require('axios');

describe('index tests', () => {
    test("Check jest is working", () => {
        expect(1).toBe(1);
    });

    test("Axios GET /pokemon returns 200 status", async () => {
        const response = await axios.get('http://localhost:3000/pokemon');
        expect(response.status).toBe(200);
    });

    test('supertest GET /pokemon returns 200 status', () => {
        request(app).get('/pokemon').expect(200);
    })

    test("Axios GET /pokemon returns pokemon object", async () => {
        const expected = [{ pokemon: 'pikachu' }];
        const response = await axios.get('http://localhost:3000/pokemon');
        expect(response.data).toEqual(expect.arrayContaining(expected));
    });

    test('supertest GET /pokeon returns pokemon object', () => {
        request(app).get('/pokemon').expect({ pokemon: 'pikachu' })
    })
});