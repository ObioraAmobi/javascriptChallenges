function reverse (text) {
	var reversed = "";
	for ( var i = 0; i<text.length; i++ ) {
		//reversed += text[i]
		reversed += text[ ( text.length -1 ) - i ]
	};
	return reversed;
}
reverse("abcd")