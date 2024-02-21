// foo(2, 3, 4, 5, 6, 7);
// var foo = (...args) => Math.max(...args.filter((e) => e != Math.max(...args)));
// console.log(foo(2, 3, 14, 5, 6, 7));

// var max1 = (args) => {
//   var max = args[0];
//   for (var item of args) {
//     if (max < item) {
//       max = item;
//     }
//   }
//   return max;
// };

// var max2 = (args) => {
//   var one = max1(args);
//   var array = [];
//   for (var item of args) {
//     if (item != one) {
//       array.push(item);
//     }
//   }

//   return array;
// };

// var array = [2, 3, 14, 5, 6, 7];

// var filterArray = max2(array);
// var netice = max1(filterArray);

// console.log("netice", netice);

// var random = Math.random();
// var max = 20;
// var random = parseInt(Math.random() * max + 1);

// console.log(random);

// var max = 15;
// var min = 5;
// var random = parseInt(Math.random() * (max - min)) + min;

// console.log(Boolean([]));
