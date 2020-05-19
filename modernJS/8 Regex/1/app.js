let re;
re = /hello/;
re = /hello/i; // letter "i" at the end make matching case insensative
// re = /hello/g; // letter "g" Global search, is is going to look for the entire regex

// exec func return an array of results or null
const result = re.exec('hello world hello');

// test func return true or false 
const result2 = re.test('hello');

// match work the other way around
const str = 'Hello there hello';
const result3 = str.match(re);

// search func returns index of the first match if not found return -1 
const str2 = 'Hello there';
const result4 = str.search(re);
// replace func return a new string with replaced values
const str3 = 'Hello there';
const newStr = str3.replace(re, 'Hi');
console.log(newStr);