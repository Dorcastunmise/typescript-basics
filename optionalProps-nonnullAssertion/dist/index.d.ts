declare type fruit = {
    name: string;
    taste: string;
    color: string;
    allSeason: boolean;
    price?: number;
};
declare let fruit1: fruit;
declare let fruit2: fruit;
declare function getPrice(price: number, discount?: number): number;
