'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const amountDroid = prompt('Сколько дроидов вы хотите купить?');
let totalPrice = pricePerDroid * amountDroid;;
let answer;
let remainCredits = credits - totalPrice;;
let purchaseAmount = amountDroid * pricePerDroid;
let purchaseFail = 'Недостаточно средств на счету!';
let purchaseConfirm = `Вы купили ${purchaseAmount} дроидов, на счету осталось ${remainCredits} кредитов.`;
  
    
if (amountDroid === null) {
    answer = 'Отменено пользователем!';
    alert(answer);
} else if ((credits - totalPrice) <= 0) {
    console.log(purchaseFail);
} else  {
    alert(purchaseConfirm);
    console.log(totalPrice);
} 