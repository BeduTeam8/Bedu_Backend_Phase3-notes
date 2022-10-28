const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// app.get("/", function (req, res) {
// 	res.send(fs.readFileSync("index.html", "utf-8"));
// });

// app.listen(port, function () {
// 	console.log("Example app listening on port", port + "!");
// });

app.get("/", function (req, res) {
	// res.setHeader("content-type", "text/plain");
	const html = fs.readFileSync("./index.html", "utf-8");
	res.send(html);
});

app.listen(port, function () {
	console.log("Example app listening on port", port + "!");
});
