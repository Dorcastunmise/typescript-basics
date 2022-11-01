declare class fruit {
    readonly price: number;
    constructor(price: number);
}
declare const mango: fruit;
declare class furnitures {
    price: number;
}
declare const couch: furnitures;
declare class clothings {
    readonly price: number;
    protected static count: number;
    constructor(price: number);
    static getCount(): number;
}
declare const jacket: clothings;
declare const blouse: clothings;
