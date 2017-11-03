//Use the '<br>' to create new lines
//If a String continues across more than one line us '\' to escape the linebreak and
//join he string at both lines such as shown
var s = "a string can \
be across several lines \
and thereby be more readable"

//Use the '<p></p>' to create a new paragraf
//
//this document contains all that is used within the website and acts as a library
//to write cleaner code throughout the html script
function getText(s){
	switch(s){
		case 'About us heading':
			return 'Om oss';
		case 'About us body':
			return "<h1>Contact</h1> \
			<p>Please contact us using one of the following emails: </p> \
			Lukas Christensson: lukaschristensson@hotmail.com <br> \
			Linus Christensson: linuschristensosn@hotmail.com <br> \
			\
			\
			\
			\
			";
		default:
			return "";
	}

}