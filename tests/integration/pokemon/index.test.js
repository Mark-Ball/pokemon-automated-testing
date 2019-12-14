const request = require('supertest');
const app = require('./../../../app');
const axios = require('axios');

test("Axios returns 200 status", async () => {
    const response = await axios.get('http://localhost:3000/pokemon');
    expect(response.status).toBe(200);
});

test("Axios returns pokemon object", async () => {
    const response = await axios.get('http://localhost:3000/pokemon');
    expect(response.data).toMatchObject({ 'pokemon': /./ })
})

test("Check jest is working", () => {
    expect(1).toBe(1);
});

// // passes, but Jest does not exit after test complete
// test("GET at /pokemon returns 200 status", function() {
//     const response = request(app).get('/pokemon').expect(200);
// })

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