//----------Optional properties & Non-null Assertion 

type fruit = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean,
    price?: number
}

let fruit1: fruit = { 
    name: "Mango",
    taste: "sweet",
    color: "yellow",
    allSeason: false,
    price: 38
}

let fruit2: fruit = { 
    name: "Orange",
    taste: "sweet-tart",
    color: "orange",
    allSeason: false
}

function getPrice(price: number, discount?: number ) {
    if(discount) {
    return price + discount;
    } else {
        return price + 10;
    }
}

console.log(getPrice(fruit1.price!));
console.log(getPrice(fruit2.price!));

