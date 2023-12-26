const operates = document.getElementsByClassName('operate');
const input = document.querySelector('#input');
const calculate = document.getElementById('calculate');
const formula = document.getElementById('formula');
const result = document.getElementById('result');

formula.addEventListener('click', () => {
  const inputValue = eval(input.value);

  const calculatedResult =
    ((2 * 3.14) / inputValue) * (inputValue ** (1 / 2) / 8) + 5;
  result.innerText = calculatedResult;
});

calculate.addEventListener('click', () => {
  result.innerText = eval(input.value);
});

for (let i = 0; i < operates.length; i++) {
  operates.item(i).addEventListener('click', (e) => {
    input.value += e.target.innerText;
  });
}