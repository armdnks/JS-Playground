/**
 *  #### Remove All The Marked Elements of a List
 *  https://www.codewars.com/kata/563089b9b7be03472d00002b
 *
 *  @task
 *  Define a method/function that removes from a given array of integers all the values contained in a second array.
 *
 *  @example
 *  - [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
 *  - [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
 *  - [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
 *
 *  @param    {Array} a Integer list
 *  @param    {Array} b Value list
 *  @returns  New array values
 *
 */

Array.prototype.remove_ = function (a, b) {
  return a.filter((n) => !b.includes(n));
};

const array = new Array();

var integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
var values_list = [1, 3];

console.log(array.remove_(integer_list, values_list)); // [ 2, 2, 4 ]
