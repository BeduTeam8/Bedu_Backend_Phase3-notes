// get from api https://swapi.dev/api/people/
const fs = require("fs");
const path = require("path");

const url = "https://swapi.dev/api/people/";

const getPeople = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const getPeopleData = async (url) => {
	const data = await getPeople(url);
	const { results, next } = data;
	results.forEach((person) => {
		const { name, height, mass, homeworld, films } = person;
		console.log(
			`Name: ${name}, Height: ${height}, Mass: ${mass}, Homeworld: ${homeworld}, Homeworld: ${films}`
		);
	});
	if (next) {
		getPeopleData(next);
	}
};

getPeopleData(url);
