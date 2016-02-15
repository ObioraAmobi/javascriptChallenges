function calculation(){
	var result = "";
	var sum = 0;
	for (var i=0; i<=500; i++) {
		if (i%23==0) {
			result = result + "\t" +i
			sum = sum + i
		};
	};
	console.log("Elements => " + result);
	console.log("Sum => " + sum);
}