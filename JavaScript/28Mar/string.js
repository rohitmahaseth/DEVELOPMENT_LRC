let val= 10;

let singleQuotes= 'hello i am singleQuote '+ val;
let doubleQuotes= "hello i am doubleQuotes "+ val;
let templatesString= `hello i am doubleQuotes ${val}`;

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(templatesString);

//split
let arrayOfString= singleQuotes.split("e");
console.log(arrayOfString);
//join
let finalString= arrayOfString.join("$");
console.log(finalString);