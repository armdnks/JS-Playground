/**
 *  #### Simple Fun #176: Reverse Letter
 *  https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
 *
 *  @task
 *  Given a string `str`, reverse it and omit all non-alphabetic characters.
 *
 *  @example
 *  For `str = "krishan"`, the output should be `"nahsirk"`.
 *  For `str = "ultr53o?n"`, the output should be `"nortlu"`.
 *
 *  @input_output
 *  - `[input]` string `str`
 *
 *  A string consists of lowercase latin letters, digits and symbols.
 *  - `[output]` a string
 *
 *  @param    {String} str
 *  @returns  Reverse string
 *
 */

const reverseLetter = (str) => [...str.replace(/[\d\W_]/g, "")].reverse().join("");

/* ### SOLUTIONS
const reverseLetter = str => str.match(/[a-zA-Z]/g).reverse().join('');
*/

console.log(reverseLetter("krishan")); // nahsirk
console.log(reverseLetter("ultr53o?n")); // nortlu
