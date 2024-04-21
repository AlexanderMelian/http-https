const fs = require("fs");
const https = require("https");
const express = require("express");

const key = fs.readFileSync("server.key");
const cert = fs.readFileSync("server.cert");

const app = express();

app.get("/", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
  	res.write("Hello World");
	res.end();
});


https.createServer({ key, cert }, app).listen(3001, () => {
    console.log("Servidor HTTPS en el puerto 3001");
});
