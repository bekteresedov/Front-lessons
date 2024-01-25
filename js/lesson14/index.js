// var eded = 123;
// var netice = 0;

// while (eded > 0) {
//   var qaliq = eded % 10;
//   // 3 , 2, 1
//   netice = netice * 10 + qaliq;
//   //   0=0*10+3
//   //   3=3*10+2
//   // 32=32*10+1
//   // 321
//   eded = parseInt(eded / 10);
//   //   12
//   // 1
//   // 0
// }

// alert(netice);

var array = ["Huseyn", "Baktar", "Tangiz"];

// function gosterEkranda(data) {
//   console.log(data);
// }

// function getServerdenDataCek(index, callbackFunc) {
//   var findUser = array[index];

//   callbackFunc(findUser);
// }

// getServerdenDataCek(gosterEkranda());

// function test(alma) {
//   var a = 13 + 23;
//   console.log("alma function called");
//   alma();
// }

// function armud() {
//   console.log("Men parametr olaraq oturulen callbackem");
//   for (var i = 0; i < 20; i++) {
//     console.log(i);
//   }
// }

// test(armud());

// var array = 321;

// var elementler = [4, 5, 6, 7, 89];

// var toplaUmumi = (array) => array.reduce((sum, element) => sum + element, 20);

// console.log(toplaUmumi(elementler));
// function armud(e){
//     return String(e)
// }
// console.log(elementler);
// var alma = (array) => array.map((e) => String(e));
// console.log(alma(elementler));

// function test(array) {
//   var sonunc = [];
//   for (var item of array) {
//     sonunc.push(String(item));
//   }
//   return sonunc;
// }
// function topla(array) {
//   var sum = 0;
//   for (var item of array) {
//     sum += item;
//   }
//   return sum;
// }

// console.log(topla(array));

// var array=[2, 3, 5, 6].map((element) => {});
// var number=[2, 3, 5, 6].reduce((sum, element) => {}, 20);

var alma = [3, 4, 5, -6, -7];
var musbetelementleriMeneVer = (array) => {
  return array.reduce((sum, x) => {
    if (x % 2 == 0 && x > 0) {
      return sum + x;
    }
  });
};

console.log(musbetelementleriMeneVer(alma));
