// let promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let numero = Math.random();
// 		if (numero >= 0.5) resolve("Correcto");
// 		reject("Error");
// 	}, 2000);
// });
// promesa.then((data) => console.log(data)).catch((data) => console.log(data));
// console.log("Inicio");

const fs = require("fs");

function readFile(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, "utf8", (error, data) => {
			if (error) return reject(error);
			return resolve(data);
		});
	});
}

readFile("./text.txt")
	.then((data) => console.log(data))
	.catch((error) => console.error(error));

let promesa1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "uno");
});

let promesa2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "dos");
});

let promesa3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "tres");
});

Promise.all([promesa1, promesa2, promesa3]).then((valores) => {
	console.log(valores);
});
