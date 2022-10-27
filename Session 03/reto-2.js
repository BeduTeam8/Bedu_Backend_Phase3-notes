// Reto 2
let readFile = (path) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path, "utf-8", (error, data) => {
			if (error) return reject(error);
			return resolve(data);
		});
	});
};
