const http = require("http");
const fs = require("fs");
const { passwordGenerator } = require("../Password-generator");
console.log("hello world");
const { sendEMail } = require("./email-sender");
sendEMail();

passwordGenerator();

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });
    response.write("<h1>This is coming from a backend<h1>");
    response.end();
  })
  .listen(3000);

console.log("server is running on port 3000");
fs.writeFileSync("Hello.txt", "Hello Node");

fs.readFile("Hello.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
