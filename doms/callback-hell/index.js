// function step1(callback) {
//   setTimeout(function () {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(function () {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(function () {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }

// step1(function () {
//   step2(function () {
//     step3(function () {
//       console.log("All steps completed");
//     });
//   });
// });

// and promise
function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

step1()
  .then(() => {
    return step2();
  })
  .then(() => {
    return step3();
  })
  .then(() => {
    console.log("All steps completed");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
