//never & void

function sum(a: number, b: number): void {
    let c = a + b;
    console.log(c);
}

function raiseError(message:string): never {
    throw new Error(message);
    console.log("sjah");
}

function forever(): never {
    while(true) {
        console.log(`typescript`);
        
    }
}



