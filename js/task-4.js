'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let amountDroid = prompt('Сколько дроидов вы хотите купить?');
let totalPrice;
let answer;
let purchaseConfirm;
let remainCredits;
let purchaseAmount;
let purchaseFail = 'Недостаточно средств на счету!';
    
if (amountDroid == null) {
    answer = 'Отменено пользователем!';
    alert(answer);
} else {
    totalPrice = pricePerDroid * amountDroid;
    console.log(totalPrice);
}

purchaseAmount = amountDroid * pricePerDroid;
remainCredits = credits - totalPrice;
purchaseConfirm = `Вы купили ${purchaseAmount} дроидов, на счету осталось ${remainCredits} кредитов.`

if (totalPrice <= credits) {
    alert(purchaseConfirm);
} else if (totalPrice > credits) {
    console.log(purchaseFail);
}
