 function getTriangleArea(a, h) {
  	if ((a > 0) || (h > 0)) {
  		return a*h/2;
		} return "Incorrect data";
  }

console.log(getTriangleArea(15, 8));

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(11, 17),
	triangle3Area = getTriangleArea(12, 19);

var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola'];
var indexOfOla = names.indexOf('Ola');

console.log('The search value is on ' + indexOfOla + ' position');

console.log(names[indexOfOla]);

var values = [1, 2, 3, 4, 5, 6];
    var multipliedValues = values.map(function(value) {
    return value * 10;
});

console.log(values);
console.log(multipliedValues);