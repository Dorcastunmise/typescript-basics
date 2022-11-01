//----------Generics------
/* Generics can adapt to any scenario  */
let arrNum = [23, 45, 643, 345, 12345];

function getRandomElement(arr: number[]) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(getRandomElement(arrNum));

let arrString = ['social', 'life', 'is', 'not', 'real'];

function getRandomElementString(arr: string[]) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(getRandomElementString(arrString));


//-----------------GENERICS APPLICATION
function getRandomElements<A>(arr: A[]): A{
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
let results: string;
results = getRandomElements(arrString);
/* results = getRandomElements(arrNum);
 console.log(typeof results);         */