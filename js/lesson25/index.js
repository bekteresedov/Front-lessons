let employees = [
  {
    id: 1,
    name: "Baktar",
    surname: "Asadov",
    age: 21,
    job: "Senior Java developer",
    salary: "8000$",
    address: {
      country: "Turkish",
      city: "Istanbul",
      street: "Ashiq Elesger",
    },
    contact: {
      phoneNumber: "051-711-27-57",
      email: "baktarasadov@gmail.com",
    },
  },
  {
    id: 2,
    name: "Tangiz",
    surname: "salamov",
    age: 24,
    job: "Senior Python developer",
    salary: "7999$",
    address: {
      country: "Turkish",
      city: "Izmir",
      street: "Ashiq Elesger 6",
    },
    contact: {
      phoneNumber: "051-211-22-11",
      email: "tangoiz56@gmail.com",
    },
  },
];

// const updateOneEmployeePUT = (id, updateEmployee) => {
//   const findEmployeeIndex = employees.findIndex((emp) => emp.id == id);
//   if (findEmployeeIndex == -1) {
//     return {
//       success: false,
//       message: "Employee not found!",
//     };
//   }
//   employees[findEmployeeIndex] = {
//     ...employees[findEmployeeIndex],
//     ...updateEmployee,
//   };
//   return {
//     success: true,
//     message: "Employee updated successfully",
//     data: employees[findEmployeeIndex],
//   };
// };

// console.log(
//   updateOneEmployeePUT(1, {
//     name: "Serxan ",
//   })
// );

// // console.log(employees);

// const updateOneEmployeePATCH = (id, updateEmployee) => {
//   const findEmployeeIndex = employees.findIndex((emp) => emp.id == id);
//   if (findEmployeeIndex == -1) {
//     return {
//       success: false,
//       message: "Employee not found!",
//     };
//   }
//   const findData = employees[findEmployeeIndex];
//   const update = {
//     ...findData,
//     ...updateEmployee,
//   };

//   employees[findEmployeeIndex] = update;

//   return {
//     success: true,
//     message: "Employee updated successfully",
//     data: employees[findEmployeeIndex],
//   };
// };

// console.log(
//   updateOneEmployeePATCH(1, {
//     name: "Serxan ",
//     age: 250,
//   })
// );

// var product = {
//   name: "Xiyar",
//   price: "5$",
// };

// var result = Object.values(product);
// var resultKey = Object.keys(product);

// console.log(product["name"]);

var employee = {
  id: 1,
  name: "Baktar",
  surname: "Asadov",
  age: 21,
  job: "Senior Java developer",
  salary: "8000$",
  address: {
    country: "Turkish",
    city: "Istanbul",
    street: "Ashiq Elesger",
  },
  contact: {
    phoneNumber: "051-711-27-57",
    email: "baktarasadov@gmail.com",
  },
};

console.log(Object.values(employee.address));
