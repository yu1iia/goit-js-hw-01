'use strict';

let total = 0;
let input;
do {
  input = prompt('Введите число');
  
  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
}
while (input !== 0);
alert(`Общая сумма чисел равна ${total}`);