/**
 *  #### Make acronym
 *  https://www.codewars.com/kata/57a60bad72292d3e93000a5a
 *
 *  @task
 *  Write function which takes a string and make an acronym of it.
 *
 *  @rules
 *  - split string to words by space char
 *  - take every first letter from word in given string
 *  - uppercase it
 *  - join them toghether
 *
 *  @example
 *  Code wars -> C, w -> C W -> CW
 *
 *  @param    {String} str String input
 *  @returns  Only uppercase first letter
 *
 *  - Note: There will be at least two words in the given string!
 *
 */

const toAcronym = (str) => str.replace(/(\w)\w+|\s|\W/g, "$1").toUpperCase();

console.log(toAcronym("Portable Network Graphics")); // PNG
console.log(toAcronym("hyper text markup language")); // HTML
console.log(toAcronym("PHP: Hypertext Preprocessor")); // PHP
