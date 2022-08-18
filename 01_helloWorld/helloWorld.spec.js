
// At the very top of the file we use require() to import the code from the javascript file (helloWorld.js) so that we can test it.

const helloWorld = require('./helloWorld'); 

// The next block (describe()) is the body of the test. Basically, all it's doing is running your code and testing to see if the output is correct. The test() function describes what should be happening in plain english and then includes the expect() function. For this simple example it should be pretty simple to read.

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
