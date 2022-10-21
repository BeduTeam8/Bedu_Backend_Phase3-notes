function add(num1, num2) {
	console.log(num1 + num2);
} // function declaration (function statement)

// function subtract

function subtract(num1, num2) {
	console.log(num1 - num2);
}

// function multiply
function multiply(num1, num2) {
	console.log(num1 * num2);
}

// function divide

function divide(num1, num2) {
	console.log(num1 / num2);
}

// random number generator
random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// export functions

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	random,
};
