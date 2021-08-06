const { createServer } = require('http');
const fs = require('fs');
const port = 3000;
// Get Express
const express = require('express');
const app = express();
app.use(express.static());
// Require JSON data
const jsonData = require('./products.json');
const productData = jsonData.Men;

for (item in productData) {
  if (productData[item].sleeve === 'short') {
    console.log(productData[item].sleeve);
    
  }
  if (productData[item].sleeve === 'long') {
    console.log(productData[item].sleeve);
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
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write(data);
      return res.end();
    }
  });
}).listen(port);