// let name = "Baktar";
// let surname = "Asadov";
// let age = 21;

// const insan = {
//   ad: "Baktar",
//   soyad: "Asadov",
//   kodYazir: (a, b) => a + b,
// };

// const Kitab={
//     ad:"Insan neyle yasar",
//     vereqSayi:120
// }

// const masin={
//     reng:"qara",
//     // muherrik:
//     tekersayi:
// }
// let baktar = {
//   name: "Baktar",
//   surname: "Asadov",
// };

// let ali = baktar;
// ali.surname = "Aliov";
// var sanan = {};
// ali = sanan;

// console.log(baktar);
// console.log(ali);

// var Huseyn = {
//   surname: "huseynov",
//   yas: 30,
// };

// Huseyn.ceki = 70;

// console.log(Huseyn);

// var Huseyn = {
//   surname: "huseynov",
//   yas: 30,
//   herbi: true,
//   unvan: {
//     seher: "Baki",
//     olke: "Azerbaycan",
//     kuce: "ashiq elesger",
//   },
//   masinlar: [
//     {
//       masinAdi: "Bmw",
//       reng: "qirmizi",
//     },
//     {
//       masinAdi: "07",
//       reng: "qara",
//     },
//   ],
// };

// console.log(Huseyn.yas);
// console.log(Huseyn.unvan.olke);
// console.log(Huseyn.masinlar[0].masinAdi);

// var insan = {
//   name: "Tangiz",
//   yas: 23,
// };
// var insan2 = { ...insan };
// insan2.yas = 34;
// console.log(insan2);
// delete insan.yas;
// insan.ceki = 56;
// console.log(insan);

// let telebeler = [
//   {
//     ad: "Tangiz",
//     soyad: "Salamova",
//     yas: 24,
//     steb: 70,
//     imtahanlar: [
//       {
//         fenn: "riya",
//         bal: 60,
//       },
//       {
//         fenn: "eng",
//         bal: 90,
//       },
//       {
//         fenn: "az",
//         bal: 80,
//       },
//     ],

//     ortalama: 0,
//   },

//   {
//     ad: "Bektar",
//     soyad: "Asadov",
//     yas: 21,
//     steb: 70,
//     imtahanlar: [
//       {
//         fenn: "riya",
//         bal: 90,
//       },
//       {
//         fenn: "eng",
//         bal: 100,
//       },
//       {
//         fenn: "az",
//         bal: 70,
//       },
//     ],

//     ortalama: 0,
//   },

//   {
//     ad: "Huseyn",
//     soyad: "Huseynov",
//     yas: 30,
//     steb: 70,
//     imtahanlar: [
//       {
//         fenn: "riya",
//         bal: 20,
//       },
//       {
//         fenn: "eng",
//         bal: 90,
//       },
//       {
//         fenn: "az",
//         bal: 60,
//       },
//     ],

//     ortalama: 0,
//   },
// ];

// telebeler.forEach(
//   (telebe) =>
//     (telebe.ortalama =
//       telebe.imtahanlar.reduce((sum, imtahan) => sum + imtahan.bal, 0) /
//       telebe.imtahanlar.length)
// );

// telebeler.forEach((telebe) => {
//   if (telebe.ortalama > 90) {
//     telebe.steb = 120;
//   } else if (telebe.ortalama > 80) {
//     telebe.steb = 90;
//   } else if (telebe.ortalama > 60) {
//     telebe.steb = 70;
//   } else {
//     telebe.steb = 0;
//   }
// });

// telebeler.forEach((telebe) => {
//   console.log(
//     "____________________________________________________________________"
//   );
//   console.log("name", telebe.ad);
//   console.log("ortalama", telebe.ortalama);
//   telebe.imtahanlar.forEach((imtahan) => {
//     console.log(imtahan.fenn, imtahan.bal);
//   });
//   console.log(
//     "____________________________________________________________________"
//   );
// });

// var s = [2, 3, 4, 56];
// var b = [...s];
// let alma = {
//   name: "almali",
//   reng: "qirmizi",
// };

// let alma2 = { ...alma };
// alma2.reng = "sari";

// console.log(alma, alma2);

// isciler={
// id:
//     name:
//     surname
//     age
//     salary
//     job
//     addrres:{
//         country,
//         city,
//         street
//     }
//     contact:{
//         email:
//         phoneNumer
//     }
// }

// CRUD
// C create
// R read
// u update
// d delete

// saveEmployee(newEmployee)
// getAllEmployees
// updateOneEmployee(id,updateEmployee)
// deleteOneEmployee(id)
// getOneEmployee(id)

// {
//     success:true,
//     message:"Employee  found!",
//     data:{

//     }

// }
