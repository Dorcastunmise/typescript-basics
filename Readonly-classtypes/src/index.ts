//----------Read only & Class types

class fruit {
    readonly price: number;

    constructor(price: number) {
        this.price = price;
    }
}

const mango = new fruit(20);
//mango.price = 2;    price cannot be reassigned 'cos of the 'readonly' access modifier
console.log(mango.price);

class furnitures {
    price: number = 20;
    
    // constructor(price: number) {
    //     this.price = price;
    // }
}

const couch = new furnitures();
couch.price = 2;  //  price cannot be reassigned 'cos of the 'readonly' access modifier
console.log(couch.price);


//-------------Static Method-------
class clothings {
    readonly price: number;
    protected static count: number = 0;
    
    constructor(price: number) {
        this.price = price;
        clothings.count++;
    }
    static getCount() {
        return clothings.count;
    }
}

const jacket = new clothings(20);
//jacket.price = 2;   // price cannot be reassigned 'cos of the 'readonly' access modifier
console.log(clothings.getCount());

const blouse = new clothings(32);
console.log(clothings.getCount());