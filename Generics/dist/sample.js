"use strict";
const details = { lastName: "Femi", firstName: "Salmon" };
function getElement(obj, key) {
    return obj[key];
}
console.log(getElement(details, 'firstName'));
//function getPerson<T extends Person>(data: T) {
//     return data;
// }
