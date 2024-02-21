// var array = ["Salam", "necesen", "yaxsiyam", "alma", "armud"];

// var randomWord = (sozler) => sozler[Math.floor(Math.random() * sozler.length)];

// var result = (padnos) => {
//   var newArray = [];
//   while (true) {
//     var randomSoz = randomWord(padnos);
//     if (!newArray.includes(randomSoz)) {
//       newArray.push(randomSoz);
//     }
//     if (newArray.length == padnos.length) break;
//   }

//   return newArray.join(" ");
// };

// console.log(result(array));

// var let const

// var isAdmin = true;
// if (isAdmin) {
//   var alma = "adminle bagli bir sey";
//   let armud = "adminle bagli bir sey";
//   const nar = "adminle bagli bir sey";
// }

// function foo() {
//   var s = "neyse";
// }

// console.log(s);
// console.log(alma);
// console.log(armud);

// const array = [2, 3, 4];
// array.push(22234);
// // const alma = "Baktar";
// // alma = alma + "armud";
// // array[0] = 12;

// console.log(array);
// []

// var a=12;
// var b=false

// console.log(false + false + true + 4);

// +"";
// console.log("121dege" * false);
// let a = "23";
// console.log(Boolean(NaN));

// ' '
// 0
// '0'
const array = [
  [23, 4, 32, 12],
  [23, 12, 45, 67],
  [12, 34, 121],
];
[
  // 23,45,34
  32, 54, 43,
  // 32,54
];

// 1. 2 ci max
// 2. elementleri tersine cevir.
// 3. murekkeblerin cixardirsiniz.
// 4. min vereceksiniz
// let arrays = [
//   [23, 4, 32, 12],
//   [23, 12, 45, 67],
//   [12, 34, 121],
// ];

// var isPrime = (number) => {
//   for (var i = 2; i < number; i++) {
//     if (number % i == 0) return true;
//   }
//   return false;
// };

// var s = arrays.map((e) =>
//   Number(
//     String(Math.max(...e.filter((s) => s != Math.max(...e))))
//       .split("")
//       .reverse()
//       .join("")
//   )
// );

// var result = Math.min(...s.filter((e) => isPrime(e)));
// console.log(result);

// var insan = {
//   adi: "Huseyn",
//   soyadi: "Huseynov",
//   yasi: 25,
//   boyu: "1.80",
//   qacir: function () {
//     return "men qaciram";
//   },
//   eller: ["sag eli", "sol eli"],

// };

// var a = insan.adi;
// console.log(insan);

// var User = {
//   name: "Baktar",
//   surname: "Asadov",
//   age: 21,
//   email: "baktar@gmail.com",
//   address: {
//     country: "Turkish",
//     city: "Izmir",
//     street: "Ashiq alaskar",
//   },
// };

// console.log(User.address.);

var Post = {
  id: 1,
  text: "Bu bir postdur",
  likeCount: 30,
  comments: [
    {
      id: 1,
      text: "dunya fanidir",
    },
    {
      id: 2,
      text: "pis deyilsen",
    },
    {
      id: 1,
      text: "dunya fanidir",
    },
  ],
};

var b = Post;
delete b.text;

console.log(Post, b);

// var s=12,3r323r3
