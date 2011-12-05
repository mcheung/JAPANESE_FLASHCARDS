function KanaCharacters(selected)
{	
	var kanaArray = new Array();
	kanaArray[0] = "images/world is everything _cover.jpg";
	kanaArray[1] = "images/joe_satriani_-_the_extremist-front.jpg";
	kanaArray[2] = "images/roland sh101_1.jpg";
	
	this.selectedKana = kanaArray[selected];
	
	return this.selectedKana;
	
}