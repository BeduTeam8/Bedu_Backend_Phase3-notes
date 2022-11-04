const express = require("express");
const app = express(); // Creating an Express application

app.use(express.json());

// A port where our application will be mounted
const APP_PORT = 3001;

// // Getting routes definitions
app.use("/api", require("./routes"));

// display welcome message
app.get("/", (req, res) => {
	// send h1 with dark background
	res.send(
		"<body style='background-color:#333'><h1 style='background-color: #333; color: #fff; padding: 10px; display:flex; flex-basis: 1; font-family:Roboto;'>Welcome to the Node.js REST API</h1></body>"
	);
});

// Mounting express application on specific port
app.listen(APP_PORT, () => {
	console.log(`Express on port ${APP_PORT}`);
});
