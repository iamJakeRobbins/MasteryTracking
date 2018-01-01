let yellPhrase = (phrase) =>{
	if(!phrase || typeof phrase !== 'string'){
		return 'please input a phrase';
	}
	return phrase.toUpperCase()
}


module.exports = {
	yellPhrase
}
