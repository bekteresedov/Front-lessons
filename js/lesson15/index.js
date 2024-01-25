// function alma(gilas) {
//   return gilas + 1;
// }

// var array2 = array.map(alma);

// var array3 = array.map(function (e) {
//   return e + 1;
// });
// var array = [5, 6, 7, 8, 9];

var meyveler = ["Alma", "Sar", "Gilas"];

var test = (element, index) => {
  console.log(index);
  return element[0] == "S";
};

var array4 = meyveler.filter(test);

// function sum(array) {
//   var sum = 0;
//   for (var index of array) {
//     sum *= array[index];
//   }

//   return sum;
// }

// var array5 = array.map((e) => e + 1);
console.log(array4);
