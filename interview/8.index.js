const array = [2, 3, 4, 55, 75];

// element >5 loop is  break
array.forEach((e) => {
  console.log("ust", e);
  if (e > 5) {
    throw new Error("e 5 den boyuk oldu");
    // return
  }
  console.log("alt", e);
});
