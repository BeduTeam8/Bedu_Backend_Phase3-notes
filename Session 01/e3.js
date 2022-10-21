const http = require("http");
const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");

	if (req.url === "/ping") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify({ success: true, message: "pong" }));
	}
	if (req.url === "/health") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify({ version: "1.0", launchDate: "2020-01-01" }));
	}
	console.log(req.url);
	res.end(
		JSON.stringify({
			success: true,
			canIGetCoffee: false,
			responseCode: 123,
		})
	);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
