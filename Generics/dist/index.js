"use strict";
//----------Generics------
/* Generics can adapt to any scenario  */
let arrNum = [23, 45, 643, 345, 12345];
function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(getRandomElement(arrNum));
let arrString = ['social', 'life', 'is', 'not', 'real'];
function getRandomElementString(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(getRandomElementString(arrString));
//-----------------GENERICS APPLICATION
function getRandomElements(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
let results;
results = getRandomElements(arrString);
/* results = getRandomElements(arrNum);
 console.log(typeof results);         */ 
