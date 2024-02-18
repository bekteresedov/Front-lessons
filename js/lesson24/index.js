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
    id: 1,
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

const getEmployees = () => {
  if (!employees.length) {
    return {
      success: false,
      messagge: "Employee not found !",
    };
  }
  return {
    success: true,
    messagge: "Employee found !",
    data: employees,
  };
};

const test = getEmployees();

console.log(test);
