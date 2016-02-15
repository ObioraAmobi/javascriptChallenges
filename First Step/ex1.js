function range(x1,x2) {
	var result = "";
	for (var i=x1; i<=x2; i++) {
		console.log(i);
		console.log(result);
		result += "" + i;
	}
	console.log (result)
	return result;
}