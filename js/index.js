const display = document.querySelector('.calculator .display');

document
   .querySelectorAll('.digits button')
      .forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed(e) {
   display.value += e.target.innerText;
}

document
   .querySelectorAll('.opers button')
      .forEach(oper => oper.addEventListener('click', operPressed));

function operPressed(e) {
   display.value += e.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
   display.value = eval(display.value);
}