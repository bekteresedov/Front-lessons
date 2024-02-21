// var a = [12];
// var b = 23;

// // pass  by refernce
// function foo(s) 2 {
//   s[0] = 125;
//   s[0]
// }

// // pass by value
// function foo2(f) {
//   f = 65;
// }
// foo(a);
// console.log(a);

// var meyveler = ["alma", "nar", "heyva", "gilas"];
// 111;
// var test = meyveler;
var meyveler = ["alma", "nar", "heyva", "gilas"];

console.log(...meyveler);

var test = [...meyveler];

// test[0] = "banan";
// console.log(test);
// console.log(meyveler);

// function test(...meyveler){

// }

// function topla(a, b, b, f, ...reqemler) {
//   return reqemler.reduce((sum, element, index) => sum + element, 0);
// }

// console.log(topla(5));

// var result = (eded) => (eded > 0 ? eded : eded * -1);

// console.log(result(-2));
// console.log(result(2));
// console.log(Math.pow(4, 2));

// var test = (eded) => {
//   console.log(eded * 10);
//   console.log((eded * 10) % 10);
//   return (eded * 10) % 10 > 4 ? parseInt(eded) + 1 : parseInt(eded);
// };

// console.log(test(2.4555));

// console.log(Math.round(5.5555));

// console.log(Math.ceil(5.6));
// console.log(Math.ceil(5.3));
// console.log(Math.floor(5.6));
// console.log(Math.flor(5.3));

// console.log(Math.sqrt(9));
console.log(Math.max(2, 3, 4, 5));
// 4
console.log(Math.min(2, 3, 3, 3543, 543, 5454));
// 3

var max = (...array) => Math.max(...array);
console.log(2, 3, 4, 456);
