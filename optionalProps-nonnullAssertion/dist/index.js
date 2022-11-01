"use strict";
//----------Optional properties & Non-null Assertion 
let fruit1 = {
    name: "Mango",
    taste: "sweet",
    color: "yellow",
    allSeason: false,
    price: 38
};
let fruit2 = {
    name: "Orange",
    taste: "sweet-tart",
    color: "orange",
    allSeason: false
};
function getPrice(price, discount) {
    if (discount) {
        return price + discount;
    }
    else {
        return price + 10;
    }
}
console.log(getPrice(fruit1.price));
console.log(getPrice(fruit2.price));
