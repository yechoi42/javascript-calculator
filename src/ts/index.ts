function showClickedButton(str: string) {
  let prompt: string = document.getElementById("total").innerHTML;
  console.log(str);
  if (prompt === "0") {
    showResult(str);
  } else {
    showResult(prompt + str);
  }
}

function findOperator(str: string): string {
  if (str.indexOf("/") != -1) {
    return "/";
  } else if (str.indexOf("X") != -1) {
    return "X";
  } else if (str.indexOf("-") != -1) {
    return "-";
  } else if (str.indexOf("+") != -1) {
    return "+";
  } else {
    return "none";
  }
}

function parseInput(
  str: string
): { num1: string; num2: string; operator: string } {
  let prompt: string = document.getElementById("total").innerHTML;
  let operator: string = findOperator(prompt);
  let num1: string;
  let num2: string;

  if (operator !== "none") {
    let nums = prompt.split(operator);
    num1 = nums[0];
    num2 = nums[1];
  } else {
    num1 = prompt;
    num2 = "1";
    operator = "X";
  }
  return {
    num1: num1,
    num2: num2,
    operator: operator
  };
}

function calculate(num1: number, num2: number, operator: string): string {
  let ret: string = "";
  if (operator === "/") {
    ret = String(num1 / num2);
  } else if (operator === "X") {
    ret = String(num1 * num2);
  } else if (operator === "-") {
    ret = String(num1 - num2);
  } else if (operator === "+") {
    ret = String(num1 + num2);
  }
  return ret;
}

function showResult(str: string) {
  document.getElementById("total").innerHTML = str;
}

function clearPrompt() {
  document.getElementById("total").innerHTML = "";
}

function setDigitsController() {
  const digits = document.getElementsByClassName("digits");
  digits[0].addEventListener("click", e => {
    showClickedButton((<Element>e.target).innerHTML);
  });
}

function setOperationsController() {
  const operations = document.getElementsByClassName("operations");
  operations[0].addEventListener("click", e => {
    if ((<Element>e.target).innerHTML === "=") {
      let input;
      input = parseInput(document.getElementById("total").innerHTML);
      showResult(calculate(+input.num1, +input.num2, input.operator));
    } else {
      showClickedButton((<Element>e.target).innerHTML);
    }
  });
}

function setModifierController() {
  const modifier = document.getElementsByClassName("modifier");
  modifier[0].addEventListener("click", e => {
    clearPrompt();
    showClickedButton("0");
  });
}

function setEventListner() {
  setDigitsController();
  setOperationsController();
  setModifierController();
}

function init() {
  setEventListner();
}

init();