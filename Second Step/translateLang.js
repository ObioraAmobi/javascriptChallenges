function translate(text) {
	var swedish = {
		"merry": "god", 
		"christmas": "jul", 
		"and": "och", 
		"happy": "gott", 
		"new": "nytt", 
		"year": "år"
	}
	text = text.split(" ")
	var translation = "";
	for ( var i in text ) {
		if ( swedish[text[i]] ) {
			translation += swedish[text[i]] + " "
		}else if (!isNaN(text[i])){
			translation += text[i] + " "
		}
		else{
			translation += "***" + text[i] + "*** "
		}
	};
	console.log(translation)
	return translation.slice(0, -1)
}
