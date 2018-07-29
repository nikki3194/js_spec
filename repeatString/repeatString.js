var repeatString = function(word, repetiton){
	if (repetiton < 0)
		return 'ERROR'
	let string = ''
	for (i = 0; i < repetiton; i++){
		string += word
	}
	return string
}

module.exports = repeatString
