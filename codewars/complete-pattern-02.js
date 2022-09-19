/**
 *  #### Complete The Pattern #2
 *  https://www.codewars.com/kata/55733d3ef7c43f8b0700007c
 *
 *  @task
 *  You have to write a function `pattern` which returns the following Pattern (See Pattern & Examples) upto `n` number of rows.
 *  - Note: `Returning` the pattern is not the same as `Printing` the pattern.
 *
 *  @rules
 *  - If `n < 1` then it should return "" i.e. empty string.
 *  - There are `no whitespaces` in the pattern.
 *
 *  @example
 *  pattern(5)
 *  54321
 *  5432
 *  543
 *  54
 *  5
 *
 *  @param    {Number} n Integer
 *  @returns  Inverted right triangle of numbers
 *
 *  - Hint: Use `\n` in string to jump to next line
 *
 */

function pattern(n) {
  if (n < 1) return "";

  let output = [];
  const arr = [...Array(n)].map((_, i) => ++i).reverse();

  for (let i = 1; i <= arr.length; i++) output.push(arr.slice(0, i).join(""));

  return output.reverse().join("\n").trim();
}

/* ### SOLUTIONS
function pattern(n) {
  return n > 1
    ? [...Array(n)]
        .map((_, i) => [...Array(n - i)].map((_, i) => n - i).join("")) // [ '54321', '5432', '543', '54', '5' ]
        .join("\n")
        .trim()
    : "";
}
*/

pattern(5);
console.log(pattern(5));
