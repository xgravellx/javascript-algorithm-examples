/*
 * Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.
*/

function LetterChanges (str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let newAlpha = 'bcdEfghIjklmnOpqrstUvwxyzA';
    let answer = '';
  
    for (let i = 0; i < str.length; i++) {
      let index = alpha.indexOf(str[i]);
      if (index !== -1) {
        answer += newAlpha[index];
      } else {
        answer += str[i];
      }
    }
    return answer;
}
console.log(LetterChanges("abc"));