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

    test("Axios GET /pokemon returns pokemon object", async () => {
        const response = await axios.get('http://localhost:3000/pokemon');
        expect(response.data).toMatchObject({ 'pokemon': /./ })
    });
});

// passes, but Jest does not exit after test complete
// test("Supertest GET /pokemon returns 200 status", async () => {
//     const response = await request(app).get('/pokemon');
//     console.log(response);
// });

// app.get('/user', function (req, res) {
//     res.status(200).json({ name: 'John' });
// });

// request(app)
//     .get('/user')
//     .expect(200)
//     .end(function(err, res) {
//         if (err) throw err;
//     });

// test('responds with json', function(done) {
//     request(app)
//         .get('/user')
//         .expect(200, done);
// });