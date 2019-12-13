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