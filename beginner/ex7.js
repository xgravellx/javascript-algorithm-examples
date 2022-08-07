/*
 * Have the function firstReverse(str) take the str parameter being passed and
 * return the string in reversed order. For example: if the input string is
 * "Hello World and Coders" then your program should return the string
 * "sredoC dna dlroW olleH".
 * @param  {string} str A string to be reversed
 * @return {string} Reversed str
*/

function firstReverse(str) {
    return str.split("") 
              .reverse() 
              .join(""); 
}

console.log(firstReverse("Hello World and Coders"));