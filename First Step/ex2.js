function multiplicationTable(){
	var result = "";
	for(var i = 1; i <= 10; i++){
		for(var j = 1; j <= 10; j++){
			result = result + "\t" + i*j;
		}
		result = result + "\n";
	}
		console.log(result)
}