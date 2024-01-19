// var alma = function (a, b) {
//   return "Alma";
// };

// console.log(alma());

// function topla(a, b = 0) {
//     return a + b;
//   }
//   console.log(topla(2, 7));

// var topla = (a) => {
//   egherguer;
//   eegerwg3rg54;
// };

// alert(topla(5));

// var isPrime = (number) => {
//   for (let index = 2; index < number; index++) {
//     if (number % index === 0) return true;
//   }
//   return false;
// };

// var isPrime = (number) => {
//   var result = false;
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       result = true;
//       break;
//     }
//   }

//   return result;
// };
// alert(isPrime(3));

// console.log(`
// *****
// ****
// ***
// **
// *`
// );

var alma = "";

for (var i = 5; i > 0; i--) {
  for (var f = 0; f < i; f++) {
    alma += "*";
  }
  alma += "\n";
}

console.log(alma);
