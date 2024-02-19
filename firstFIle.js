const fs = require("fs");
console.log("Hello! World");

function calcArea(length, breadth) {
  console.log((length * breadth).toString());
}

calcArea(10, 5);

// FS module (FIle System)
// This is used to Create a folder
// fs.mkdir("newFolder", (err) => {
//   console.log(err);
// });

// create welcome.txt and write "hello world into it"
fs.writeFileSync("welcome.txt", "hello world");

// read from welcome.txt
fs.readFile("welcome.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.WriterFileSync("yourName.txt", "Welcome to my world");

fs.readFile("yourName.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
