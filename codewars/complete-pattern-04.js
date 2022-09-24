/**
 *  #### Complete The Pattern #2
 *  https://www.codewars.com/kata/557341907fbf439911000022
 *
 *  @task
 *  You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 *
 *  @rules
 *  - If `n < 1` then it should return "" i.e. empty string.
 *  - There are `no whitespaces` in the pattern.
 *
 *  @example
 *  pattern(4)
 *  1234
 *  234
 *  34
 *  4
 *
 *  @param    {Number} n Integer
 *  @returns  Inverted right triangle of numbers
 *
 *  - Hint: Use `\n` in string to jump to next line
 *
 */

function pattern(n) {
  return n > 0
    ? [...Array(n)]
        .map((_, i) => {
          return [...Array(++i)]
            .map((_, i) => n - i)
            .reverse()
            .join("");
        })
        .reverse()
        .join("\n")
    : "";
}

/* ### SOLUTIONS
function pattern(n) {
  let m = "";
  return Array.from({ length: n }, () => (m = n-- + m)).reverse().join`\n`;
}

const pattern = (n) => (n <= 0 ? "" : [...Array(n)].map((_, i) => [...Array(n)].map((_, j) => ++j).slice(i).join``).join`\n`);
*/

// pattern(5);
console.log(pattern(5));
