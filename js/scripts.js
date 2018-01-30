//scrippts.js

var base = 0,
	height = 0,
	area = 0;

function checkValues(base, height) {
	base = prompt('Enter base length');
	height = prompt('Enter height');
	if (base < 0 || height < 0) {
		console.log('One of the values is below 0.');
		return 0;
	} else {
		return area = (base * height) / 2;
	}
}

console.log('Area of the triangle is: ', checkValues(base, height));