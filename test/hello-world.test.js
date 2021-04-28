
const helloWorld = require('../src/hello-world');

test('validando la prueba unitaria de la funcion hello-world', () => {// 
  expect(helloWorld()).toEqual('Hello World');
});