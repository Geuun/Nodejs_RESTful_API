// Formatting, Linting, Type Checking

// Formatting : Prettier

// Linting : ESlint

// Type Checking : TypeScript, @types/node

// @ts-check
// //---
// const someString = 'Hello';
// const result = Math.log(someString);
// console.log(result);
// //---

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello!');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`);
});
