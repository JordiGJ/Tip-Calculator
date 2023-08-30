const amount = document.querySelector("#amount");
const percentage = document.querySelector("#percentage");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

const calculateTip = (e) => {
  e.preventDefault();
  const amountValue = +amount.value;
  const percValue = +percentage.value;
  const output = +amountValue + (+amountValue / 100) * percValue;
  result.textContent = parseFloat(output).toFixed(2);
};

calculate.addEventListener("click", calculateTip);

const num = 2;
