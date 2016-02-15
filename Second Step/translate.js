function translate(text){
	newText = "";
	for ( var i=0; i<text.length; i++ ){
		if ( text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u" ){
			newText += text[i]
		}else{
			newText = newText + text[i] + "o" + text[i].toLowerCase();
		}
	}
	console.log(newText)
}