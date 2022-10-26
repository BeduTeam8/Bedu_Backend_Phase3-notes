let fucion = (num1, num2, callback) => {
	callback("hola");
	let res = num1 + num2;
	callback(res);
};

let fn1 = () => console.log(1);
let fn2 = () => console.log(2);
let fn3 = () => console.log(3);

fn1();
fn2();
fn3();

console.log("testing with node this is live");
