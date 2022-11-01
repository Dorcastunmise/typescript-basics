//----------alias & interface

interface fruit  {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
}
interface Lime extends fruit {
  price: number
}
let fruit1: Lime = { 
    name: "Mango",
    taste: "sweet",
    color: "yellow",
    allSeason: false,
    price: 2873
}


//-----------or-----------
type fruitCategory = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
}
type Pear = fruitCategory & {
    price: number
}
let fruit2: Pear = { 
    name: "Orange",
    taste: "sweet-tart",
    color: "orange",
    allSeason: false,
    price: 23
}

//----------Example 2------------

interface Home {    //if the content needs to be implemented, it can only be done with interface not type
    name: string;
    readonly price: number;
    color?: string;
}
function getHome(family: Home) {
    return `${family.name} is having the price of $${family.price}`;
}
let land: Home = { name: `Duplex`, price: 100000};
console.log(getHome(land));

class MyHome implements Home {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}
