/**
 *  #### Factorial
 *  https://www.codewars.com/kata/57a049e253ba33ac5e000212
 *
 *  @task
 *  Your task is to write function `factorial`.
 *
 *  @example
 *  https://en.wikipedia.org/wiki/Factorial
 *
 *  @param    {Number} n
 *  @returns  Factorial number
 *
 */

/*
function factorial(n) {
  if (n < 2) return 1;

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}
*/

const factorial = (n) => [...Array(n)].map((_, i) => ++i).reduce((a, c) => a * c, 1);

/* ### SOLUTIONS
const factorial = (n) => (n ? n * factorial(n - 1) : 1);
*/

console.log(factorial(0)); // 1
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
