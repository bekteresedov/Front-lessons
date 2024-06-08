class MyError extends Error {
  constructor(message) {
    super(message);
  }
}

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new MyError("reqem daxil edin zehmet olmasa");
  }
  return a + b;
}

try {
  const result = sum(12, true);
  console.log(result);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("isleyirem");
}
