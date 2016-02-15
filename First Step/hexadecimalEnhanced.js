function getRGB(hexcolor){
	var splitColor=""
	var sudo=""
	var rgb=""
	var test=hexcolor.split("",7);
	//return test;
	// test = ["#", "0", "0", "0", "0", "F", "F"]

	splitColor+=test[0]+","+test[1]+test[2]+","+test[3]+test[4]+","+test[5]+test[6];

 	//return splitColor;
 	// splitColor = #,00,00,FF
 
 	sudo=splitColor.split(",");
 	//split(",") = we split at the sight of every comma and make an array
 	//return sudo;
 	// sudo = ["#", "00", "00", "FF"]
 
 	rgb="RGB("+parseInt(sudo[1].toString(),16)+","+parseInt(sudo[2].toString(),16)+","+parseInt(sudo[3].toString(),16)+")";
 	//return rgb;

	switch (hexcolor) {
 		case "#000000":
 		rgb = rgb + " black"
 		break;
 		case "#FFFFFF":
 		rgb = rgb + " white"
 		break;
 		case "#FF0000":
 		rgb = rgb + " red"
 		break;
 		case "#00FF00":
 		rgb = rgb + " green"
 		break;
 		case "#0000FF":
 		rgb = rgb + " blue"
 		break;
 		default:
 		rgb = rgb
 		break;
 	};
 	console.log(rgb)
}