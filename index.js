String.prototype.isUpperCase = function () {
  return /[a-z]/g.test(s.trim()) ? false : true;
};

const string = new String();

console.log("HELLO WORLD".isUpperCase());
