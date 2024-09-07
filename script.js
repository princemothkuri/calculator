let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let currentOperand = "";
let previousOperand = "";
let operation = "";

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    switch (value) {
      case "AC":
        currentOperand = "";
        previousOperand = "";
        operation = "";
        display.innerText = "0";
        break;
      case "=":
        if (currentOperand && previousOperand && operation) {
          calculate();
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        if (currentOperand) {
          if (previousOperand) {
            calculate();
          }
          operation = value;
          previousOperand = currentOperand;
          currentOperand = "";
        }
        break;
      case "x²":
        currentOperand = String(Math.pow(Number(currentOperand), 2));
        display.innerText = currentOperand;
        break;
      case ".":
        if (!currentOperand.includes(".")) {
          currentOperand += ".";
        }
        break;
      default:
        if (display.innerText === "0") {
          currentOperand = value;
        } else {
          currentOperand += value;
        }
        display.innerText = currentOperand;
        break;
    }
  });
});

function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    case "%":
      result = prev % current;
      break;
    default:
      return;
  }

  currentOperand = String(result);
  operation = "";
  previousOperand = "";
  display.innerText = currentOperand;
}
