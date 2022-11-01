"use strict";
function totalPrice(price) {
    return +(price + (price * 0.18)).toFixed(1);
}
const priceOfToy = totalPrice(12356);
// console.log(priceOfToy);
const discountedPrice = priceOfToy / 2;
console.log(discountedPrice);
