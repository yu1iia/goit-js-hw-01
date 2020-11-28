'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const answer = prompt('Введите пароль');

if (answer === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}
else if (answer == null){
    message = 'Отменено пользователем!';
} 
else {
    message = 'Доступ запрещен, неверный пароль!';
} 
alert(message);



