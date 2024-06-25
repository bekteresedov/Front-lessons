const array = [4, 5, 6, 7, 8, 9, 10, 11];
array.join("");
// array.maxNumber ---?
Array.prototype.maxNumber = function () {
  return Math.max(...this);
};
