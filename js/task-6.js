'use strict';

let total = 0;
let input;
do {
  input = prompt('Введите число');

  if (isNaN(input)) {
    alert('Вы ввели не число');
  }
  else {
    total += Number(input);
  }
}
while (input !== null);
  alert(`Общая сумма чисел равна ${total}`);
  
