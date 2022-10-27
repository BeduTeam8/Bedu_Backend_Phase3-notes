// import md5
let md5 = require("md5");

// declare api key values

const apikey = "b6e2ec381844fc11486ce4c3597061a5";

const privateKey = require("./key.js");

const ts = new Date().getTime();

//generate md5 hash from timestamp + private key + public key
const hash = md5(ts + privateKey + apikey);

const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;

const https = require("https");

// map character data from marvel api by id
// https
// 	.get(url, (res) => {
// 		let data = "";

// 		res.on("data", (chunk) => {
// 			data += chunk;
// 		});

// 		res.on("end", () => {
// 			let characters = JSON.parse(data).data.results;

// 			let characterMap = characters.map((character) => {
// 				return {
// 					id: character.id,
// 					name: character.name,
// 					description: character.description,
// 				};
// 			});
// 			console.log(characterMap);
// 		});
// 	})
// 	.on("error", (err) => console.log("Error", err));

// filter character data from marvel api by name

https.get(url, (res) => {
	let data = "";

	res.on("data", (chunk) => {
		data += chunk;
	});

	res.on("end", () => {
		let characters = JSON.parse(data).data.results;
		// console.log(characters);
		let characterFilter = characters.filter((character) => {
			return character.name == "Air-Walker (Gabriel Lan)";
		});
		console.log(characterFilter);
	});
});
``;
