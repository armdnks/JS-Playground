/**
 *  #### Remove anchor from URL
 *  https://www.codewars.com/kata/51f2b4448cadf20ed0000386
 *
 *  @task
 *  Complete the function/method so that it returns the url with anything after the anchor (`#`) removed.
 *
 *  @example
 *  "www.codewars.com#about" --> "www.codewars.com"
 *  "www.codewars.com?page=1" -->"www.codewars.com?page=1"
 *
 *  @param    {String} url
 *  @returns  Remove anchor tag and everything in front of it
 *
 */

const removeUrlAnchor = (url) => url.replace(/[#].+/g, "");

/* ### SOLUTIONS
const removeUrlAnchor = (url) => url.split("#")[0];
*/

console.log(removeUrlAnchor("www.codewars.com#about")); // www.codewars.com
