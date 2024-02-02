// function isPrime(number) {
//   if (number == 2) return false;

//   for (var i = 2; i < number; i++) {
//     if (number % i == 0) return true;
//   }
//   return false;
// }

// function alma(armud) {
//   var array = [];
//   for (var i = 2; i <= armud; i++) {
//     if (isPrime(i)) array.push(i);
//   }
//   return array;
// }

// alert(alma(12));

function alma(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].toString().length % 2 == 0) {
      count++;
    }
  }
  return count;
}

alert(alma(["122", "2132", "123", "23"]));
