// var a = 12;
// var b = 12;
// var topla = a + b;
// var vur = a * b;
// var cix = a - b;

// console.log("topla", topla);
// console.log("vur", vur);
// console.log("cix", cix);

// var a1 = "12";
// var b1 = 12;
// var topla1 = b1 + a1;
// var topla2 = b1 + +a1;

// // var vur1 = a1 * b1;
// // var cix1 = a1 - b1;

// console.log("topla1", topla1);
// console.log("topla2", topla2);

// console.log("vur1", vur1);
// console.log("cix1", cix1);

// var a = 20;
// console.log(-a);

// var array = ["Alma", "Nar"];

// for (var element of array) {
//   console.log(element);
// }

// 342;

// var reqem = 3453;
// var reqemler = [32, 12, 435, 6754, 1];

// function yaxsi(armud) {
//   var heyva = [];
//   for (var element of armud) {
//     if (parcalaMeni(element)) {
//       heyva.push(element);
//     }
//   }
//   return heyva;
// }

// function parcalaMeni(number) {
//   var count = 0;
//   while (number > 0) {
//     var qaliq = number % 10;
//     count += qaliq;
//     number = parseInt(number / 10);

//     // count++;
//   }

//   return count;
// }
// var result = 0;
// for (var item of [32, 456, 12, 3]) {
//   result += parcalaMeni(item);
// }

// alert(result);

// console.log(parcalaMeni(reqem));

// console.log(yaxsi(reqemler));

// function alma(heyvaNar) {
//   var xura = [];

//   if (heyvaNar % 2 !== 0) {
//     xura.unshift(0);
//   }
//   for (var i = 1; i <= heyvaNar / 2; i++) {
//     xura.push(i);
//     xura.push(-i);
//   }

//   return xura;
// }

// console.log(alma(5));
// function faktoriyel(n) {
//   // if (n === 0 || n === 1) {
//   //   return 1;
//   // } else {
//   return n * faktoriyel(n - 1);
//   // }
// }

// Örnek kullanım
// console.log(faktoriyel(5)); // 5! = 120
