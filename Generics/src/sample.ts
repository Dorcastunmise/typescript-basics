//---------Generics Constraint----------
type Person = {
    firstName: string;
}

const details = {lastName: "Femi", firstName: "Salmon"};

function getElement<O extends Object, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}
console.log(getElement(details, 'firstName'));

//function getPerson<T extends Person>(data: T) {
//     return data;
// }