/**************************************/
/* Name: Keith Francis
/* Course: ICT 4570
/* Date: Aug 6, 2021
/* Notes: A basic JS file to retrieve JSON data from a JSON file,
/* convert it to a JS object and render to terminal, and create a 
/* Node.js server and render a HTML page.
/**************************************/
const { createServer } = require('http');
const fs = require('fs');
const port = 3000;

// Require JSON data
const jsonData = require('./products.json');
const productData = jsonData.Men;

// Render JSON data outside object format
for (item in productData) {
  if (productData[item].sleeve === 'short') {
    console.log(productData[item].sleeve);
    console.log(productData[item].size);
    console.log(productData[item].colors + '\n');
  }
  if (productData[item].sleeve === 'long') {
    console.log(productData[item].sleeve);
    console.log(productData[item].size);
    console.log(productData[item].colors  + '\n');
  }
} 

// create server
createServer((req, res) => {
  // Get HTML Data
  fs.readFile('./products.html', (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('HTML file not found!');
    } else {
      // Render HTML file
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write(data);
      return res.end();
    }
  });
}).listen(port);