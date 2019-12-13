// const request = require('supertest');
// const app = require('./../../../app');
// require('./../../setup');

// test("index returns status", async () => {
//     const response = await request(app).get("/pokemon").expect(200);
// });

const request = require('supertest');
const app = require('./../../../app');

test("Check jest is working", () => {
    expect(1).toBe(1);
})

test("GET at /pokemon", () => {
    const response = request(app).get('/pokemon').expect(200);
})