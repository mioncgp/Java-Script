function countBs(string) {
	let totalB = 0;
  	for(let i = 0; i < string.length; i++) {
    	if(string[i] === 'B') {
        	totalB += 1;
        }
    }
  	return totalB;
}

function countChar(string, char) {
    let totalChar = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === char) {
            totalChar++;
        }
    }
    return totalChar;
}

console.log(countChar('lololoooooo', 'o'));