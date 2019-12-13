const request = require('supertest');
const app = require('./../../../app');
require('./../../setup');

describe("GET pokemon index", () => {
    test("index returns status", () => {
        const response = await request(app).get("/pokemon").expect(200);
    });
});

// test("this one should be successful", () => {
//     expect(1).toBe(1);
// })

// test("testing to see if jest works", () => {
//     expect(1).toBe(2);
// })

