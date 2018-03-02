function getTriangleArea(a, h) {
	if (a > 0) {
		return a*h/2
	} else if (h > 0) {
		return a*h/2;
	} else {
		return 'Incorrect data';
	}
}

console.log(getTriangleArea(15, 8));

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(11, 17),
	triangle3Area = getTriangleArea(12, 19);
