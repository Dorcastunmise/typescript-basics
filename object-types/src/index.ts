//---------Object types

type fruit = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
}

let fruit1: fruit = { 
    name: "Mango",
    taste: "sweet",
    color: "yellow",
    allSeason: false
}
console.log(fruit1.name);

let fruit2: fruit = { 
    name: "Orange",
    taste: "sweet-tart",
    color: "orange",
    allSeason: false
}
console.log(fruit2.name);
