const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.writeHead(200, {"Content-Type": "text/html"})
  	res.write("Hello World");
	res.end();
});

app.listen(3001);