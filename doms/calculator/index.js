const display = document.querySelector("#display");
const buttons = document.querySelectorAll('input[type="button"]');
let fristValue = "";
let secondValue = "";
let operat = "";
buttons.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value == "C") {
      display.value = "";
      return;
    } else if (e.value == "=") {
      display.value = convert(display.value);
      return;
    } else if (e.value == "+") {
      fristValue = display.value;
    }
    // display.value += e.value;
  });
});

const convert = (data) => {
  if (data.includes("+")) {
    const split = data.split("+");

    return calculate(Number(split[0]), Number(split[1]), "+");
  } else if (data.includes("-")) {
    const split = data.split("-");
    return calculate(Number(split[0]), Number(split[1]), "-");
  } else if (data.includes("*")) {
    const split = data.split("*");
    return calculate(Number(split[0]), Number(split[1]), "*");
  } else if (data.includes("/")) {
    const split = data.split("/");
    return calculate(Number(split[0]), Number(split[1]), "/");
  } else {
    return data;
  }
};
const calculate = (a, b, operation) => {
  return operation == "+"
    ? a + b
    : operation == "-"
    ? a - b
    : operation == "*"
    ? a * b
    : a / b;
};
