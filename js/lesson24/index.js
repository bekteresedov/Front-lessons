// let employees = [
//   {
//     id: 1,
//     name: "Baktar",
//     surname: "Asadov",
//     age: 21,
//     job: "Senior Java developer",
//     salary: "8000$",
//     address: {
//       country: "Turkish",
//       city: "Istanbul",
//       street: "Ashiq Elesger",
//     },
//     contact: {
//       phoneNumber: "051-711-27-57",
//       email: "baktarasadov@gmail.com",
//     },
//   },
//   {
//     id: 2,
//     name: "Tangiz",
//     surname: "salamov",
//     age: 24,
//     job: "Senior Python developer",
//     salary: "7999$",
//     address: {
//       country: "Turkish",
//       city: "Izmir",
//       street: "Ashiq Elesger 6",
//     },
//     contact: {
//       phoneNumber: "051-211-22-11",
//       email: "tangoiz56@gmail.com",
//     },
//   },
// ];

// const getEmployees = () => {
//   if (!employees.length) {
//     return {
//       success: false,
//       messagge: "Employee not found !",
//     };
//   }
//   return {
//     success: true,
//     messagge: "Employee found !",
//     data: employees,
//   };
// };

// const deleteOneEmployee = (id) => {
//   const findEmployee = employees.find((employee) => employee.id === id);
//   if (!findEmployee) {
//     return {
//       success: false,
//       messagge: "Employee not found",
//     };
//   }
//   employees = employees.filter((employee) => employee.id != id);
//   return {
//     success: true,
//     messagge: "Employee deleted successfully",
//   };
// };
// console.log(deleteOneEmployee(12));

// const test = getEmployees();

// console.log(test);
// const array = [
//   {
//     id: 3,
//     name: "baktar",
//     surname: "asadov",
//     age: 12,
//   },
//   {
//     id: 13,
//     name: "baktar",
//     surname: "asadov",
//     age: 12,
//   },
// ];

// const up = (id, updateData) => {
//   var index = array.findIndex((e) => e.id == id);
//   //   var up=array[index]

//   array.splice(index, 1, {
//     ...array[index],
//     ...updateData,
//   });

//   console.log(array);
// };

// up(3, { name: "saftar", age: 221 });

// var array2 = [3, 4, 43, 3543];

// function add(number) {
//   array2.push(number);
// }
