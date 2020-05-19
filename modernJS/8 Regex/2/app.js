let re;
// Literal characters
re = /hello/i;
// Meta-characters
re = /^h/i; // ^ = Must start with "h" in this case
re = /d$/i; // ^ = Must ends with
re = /^hello$/i; // beging with and ends with/
re = /h.llo/i; // dot could be any character
re = /h*llo/i; // asterisk matches any char from 0 
re = /gre?a?y/i; // Optional char
re = /gre?a?y\?/i; // Escape char with a backslash

// brakets [] = character Sets
re = /gr[ae]y/i; // any of those chars in the brackets
re = /[GF]ray/i; // must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F if ^ inside brackets
re = /[A-Z]ray/i; // Match any upppercase letter within this range
re = /[A-Za-z]ray/i; // Match any letter within this range
re = /[0-9]ray/i; // any number within the range
re = /[0-9][0-9]ray/ // two numbers

// Braces {} - Quantifiers
re = /Hel{3}o/i; //Must match 3 l's
re = /Hel{3,5}o/i; //Must match a number of "l" between those numbers
re = /Hel{3,}o/i; // Must match at least 2 l's or more

//Paretheses () Grouping
re = /([0-9]x){3}/ // any number within the range followed by an x 3 times.

// shorthand character classes
re = /\w/; //Word character/number or _ (Alphanumeric)
re = /\w+/; // One or more work char
re = /\W/; // anything except alphanumeric or underscore
re = /\d/; // any digit
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Non-space char
re = /Hell\b/i; // Word boundary or the exact word

//Assertions
re = /x(?=y)/; //Match x only if followed by a y
re = /x(?!y)/; //Not followed by a y

const str = 'xgy';

const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} mathes ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`)
    }
}

reTest(re, str);
