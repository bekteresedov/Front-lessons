// var alma = Number(prompt("Reqemi daxil ele"));
// 5;
// var bosqab = 1;
// while (alma > 0) {
//   bosqab = bosqab * alma;
//   console.log(bosqab);
//   alma--;
// }

// alert(bosqab);

var soz = "Salam necesen ne var ne yoxe Alalalllalalalal";
var padnos = soz.split(" ");
var uzunlug = padnos[0];
for (var i = 0; i < padnos.length; i++) {
  if (padnos[i].length > uzunlug.length) {
    uzunlug = padnos[i];
  }
}

console.log(uzunlug);
