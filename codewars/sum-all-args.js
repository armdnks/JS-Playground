/**
 *  #### Sum of all arguments
 *  https://www.codewars.com/kata/540c33513b6532cd58000259
 *
 *  @task
 *  Write a function that finds the sum of all its arguments.
 *
 *  @example
 *  sum(1, 2, 3) // => 6
 *  sum(8, 2) // => 10
 *  sum(1, 2, 3, 4, 5) // => 15
 *
 *  @param    {...Number} args Array of numbers
 *  @returns  Sum of all arguments
 *
 */

const sum = (...args) => args.reduce((a, c) => a + c, 0);

console.log(sum(1, 2, 3)); // 6
console.log(sum(8, 2)); // 10
console.log(sum(1, 2, 3, 4, 5)); // 15
