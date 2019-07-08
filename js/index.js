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

document.querySelector('.clearAll').addEventListener('click', clearAll);

function clearAll() {
   document.querySelector('.display').value = '';
}

document.querySelector('.clear').addEventListener('click', clear);

function clear() {
   let targetValue = document.querySelector('.display').value;
   if(targetValue.length > 0){
      targetValue = targetValue.substring(0, targetValue.length - 1);
      document.querySelector('.display').value = targetValue;
   }
}

document.querySelector('.sqrt').addEventListener('click', sqrt);

function sqrt() {
   let sqrtDisplay = Math.sqrt(display.value);
   sqrtDisplay.value = sqrtDisplay;
   display.value = sqrtDisplay;
}

// let saveValue

// function saveValueFunc() {
//    saveValue = localStorage.setItem('saveValue');
//    document.querySelector('.calculator .display').value = saveValue;
// }

// function getSaveValue() {
//    saveValue = document.querySelector('saveValue').value;
//    localStorage.setItem('saveValue', saveValue);
// }

// saveValueFunc();
// getSaveValue();