/*
* How to define the types for objects?
* -> classes 
* -> interfaces -> Interface in TS is used to define a structure in the TS. They donot provide any implementations for property and method . that means interfaces will only tell what are the properties and what are the function and interfaces donot define the implementations of methods.
 */

// define the interface  in TS
// So we can use interface for defining actual existence object but we wont be able to create an object from new keyword

interface Product {
    name: string;
    price: number;
    brand: string;

    display() : void;
}

let p1 : Product = {
    name: "Iphone",
    price: 100000,
    brand: "Apple",
    display: () => {
        console.log("dispaly")
    }
}
console.log(p1);

// define a class in TS
class Car {
    name : string
    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
};

// As from above we have seen that classes have datamembers and member function and also we have implementationms of member-functions