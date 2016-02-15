function sum(a){
	var totalSum = 0;
	for( var i=0; i<a.length; i++ ){
		totalSum += a[i]
	}
	return totalSum
}
function multiply(a){
	var multiplier = 1;
	for ( var i=0; i<a.length; i++ ){
		multiplier *= a[i]
	}
	return multiplier
}