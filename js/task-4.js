'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const amountDroid = prompt('Сколько дроидов вы хотите купить?');
let totalPrice = pricePerDroid * amountDroid;;
let message;
let remainCredits = credits - totalPrice;
  
    
if (amountDroid === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else  {
    message = `Вы купили ${amountDroid} дроидов, на счету осталось ${remainCredits} кредитов.`;
} 
console.log(message);