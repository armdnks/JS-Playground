/**
 *  #### Complete The Pattern #1
 *  https://www.codewars.com/kata/5572f7c346eb58ae9c000047
 *
 *  @task
 *  You have to write a function `pattern` which returns the following Pattern(See Pattern & Examples) upto `n` number of rows.
 *  - Note: `Returning` the pattern is not the same as `Printing` the pattern.
 *
 *  @rules
 *  - If `n < 1` then it should return "" i.e. empty string.
 *  - There are `no whitespaces` in the pattern.
 *
 *  @example
 *  pattern(5)
 *  1
 *  22
 *  333
 *  4444
 *  55555
 *
 *  @param    {Number} n Integer
 *  @returns  Right triangle of numbers
 *
 *  - Hint: Use `\n` in string to jump to next line
 *
 */

function pattern(n) {
  if (n < 1) return "";

  let output = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      output += i;
    }
    output += "\n";
  }

  return output.trim();
}

/* ### SOLUTIONS
function pattern(n) {
  return n > 0
    ? [...Array(n)] // [ undefined, undefined, undefined, undefined, undefined ]
        .map((_, i) => (++i).toString().repeat(i)) // [ '1', '22', '333', '4444', '55555' ]
        .join("\n")
        .trim()
    : "";
}
*/

pattern(5);
console.log(pattern(5));
