// var a = "Alma";
// function alma(a) {
//   a += "Armud";
// }

// // pass by value

// alma(a);

// console.log(a);

// var a = ["Heyva", "Armud"];
// 111;

// function alma(a) {
//   111;
//   a.push("Nar");
//   11;
// }
// alma(a);
// console.log(a);

// var a = ["Heyva", "Armud", "Gilas"];

// function alma(index, s) {
//   a[index] = s;
// }

// alma(0, "Gilanar");
// // a.splice(1, 2, "Hello");
// console.log(a);

// [8,6,4,3,4] --> [2,2,1,3,4]

var arr = [8, 6, 4, 3, 4];
var newArr = [];

var checkArr = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      newArr.push(arr[i - 1] - arr[i]);
    } else {
      newArr.push[arr[i - 1]];
    }
  }

  return newArr;
};

console.log(checkArr(arr));
