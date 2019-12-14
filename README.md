# Setting up testing using Jest

## 1. Install jest

Set up package.json using ```npm init -y```.

Install Jest as a dev dependency with ```npm i jest --save-dev```.

Configure package.json.
```
"scripts": {
"test": "jest",
}
```

## 2. Simplest implementation

The simplest implementation of Jest is to set up a test to compare one number to another. This does not require any functions, routes, or databases. Therefore it is simply a test that the command you are using to run your tests is hitting the correct file, and the syntax of the tests within those files is correct.

The first step is to set up a test file. The convention is that if you are writing a test file for ```index.js``` to call the test file ```index.test.js```.

Next we write our test. This test will simply test that 1 is equal to 1, and if all is well we expect Jest to tell us that this test has passed. Write the test like so:
```javascript
test("Check jest is working", () => {
    expect(1).toBe(1);
})
```

To run this file we type ```npm run test``` in our terminal.

## 3. Testing index

### 3.1 Setting up the controller and route

To begin testing our CRUD resources, we first set up our controller. Note that for now, this is not connected to any database. First create a ```controllers``` directory in the root of the project. Then create ```pokemon_controller.js``` inside that directory.

Inside ```pokemon_controller.js```, we are saving our data inside a variable, rather than a database, and our index method simply responds to any request by returning the pokemon object as json.

```Javascript
const pokemon = { pokemon: 'pikachu'};

function index(req, res) {
    res.json(pokemon);
}
```

Remember to export the function.

In ```routes.js``` we now set up a route to use this method. We must require in the controller, then set up the route.
```Javascript
const PokemonController = require('./controllers/pokemon_controller');

router.get('/pokemon', PokemonController.index);
```

### 3.2 Setting up the test

We will run our tests out of ```index.test.js```. To start, we will use axios to send HTTP requests to our endpoint.

First we must require in axios.
```Javascript
const axios = require('axios');
```

Then we can write our tests. The first test checks if we are receiving a 200 'OK' response status. The second test check if the response body has the expected data on it. In this case, since we set up our GET '/pokemon' route to return json, we expect to see an object with the 'pokemon' key on it. We do not care which pokemon it is, so we provide a wildcard using regex for the value.
```Javascript
test("Axios GET /pokemon returns 200 status", async () => {
    const response = await axios.get('http://localhost:3000/pokemon');
    expect(response.status).toBe(200);
});

test("Axios GET /pokemon returns pokemon object", async () => {
    const response = await axios.get('http://localhost:3000/pokemon');
    expect(response.data).toMatchObject({ 'pokemon': /./ })
});
```