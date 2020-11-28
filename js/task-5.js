'use strict';
const countryChina = 'китай';
const countryChile = 'чили';
const countryAustralia = 'австралия';
const countryIndia = 'индия';
const countryJamajka = 'ямайка';
let country = prompt('Введите вашу страну');
const normalizedCountry = country.toLowerCase();
let deliveryPrice;
const deliveryFail = 'В вашей стране доставка не доступна.';
let deliveryPriceMessage;


switch (normalizedCountry) {
    case countryChina :
        deliveryPrice = 100;
        break;
    case countryChile :
        deliveryPrice = 250;
        break;
    case countryAustralia:
        deliveryPrice = 170;
        break;
    case countryIndia :
        deliveryPrice = 80;
        break;
    case countryJamajka:
        deliveryPrice = 120;
        break;
    default:
        alert(deliveryFail);      
}

  if (deliveryPrice > 0 ){
            deliveryPriceMessage = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов.`;
            console.log(deliveryPriceMessage);
        } 