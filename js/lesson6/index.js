let soz = "Salam Necesen Neyse bir sey ola biler";

let al = prompt("Soz");
let array = [];
let ok = "";
let i = 0;
do {
  if (soz[i] != " ") {
    ok += soz[i];
  }
  if (soz[i] == " " || soz.length - 1 == i) {
    array.push(ok);
    ok = "";
  }
  i++;
} while (i < soz.length);
console.log(array);

let f = 0;
let bool = false;
do {
  let ss = array[f];
  if (ss == al) {
    bool = true;
    break;
  }

  f++;
} while (f < array.length);

console.log(bool);

// let soz = "Salam Necesen Neyse bir sey ola biler";

// let al = prompt("Soz");
// let array = [];
// let ok = "";
// let i = 0;

// do {
//   if (soz[i] != " ") {
//     ok += soz[i];
//   }

//   if (soz[i] == " " || soz.length - 1 == i) {
//     if (ok !== "") {
//       array.push(ok);
//       ok = "";
//     }
//   }

//   i++;
// } while (i < soz.length);

// console.log(array);

// let f = 0;
// let bool = false;

// do {
//   let ss = array[f];
//   if (ss == al) {
//     bool = true;
//     break;
//   }

//   f++;
// } while (f < array.length);

// console.log(bool);
