"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(object) {
        return new Complex(this.real + object.real, this.imaginary + object.imaginary);
    }
    sub(object) {
        return new Complex(this.real - object.real, this.imaginary - object.imaginary);
    }
    module() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log("RZECZYWISTA: " + this.real + (this.real != 0 ? ", UROJONA: " + this.imaginary : ""));
    }
}
const c1 = new Complex(3, 4);
const c2 = new Complex(6, 2);
let result = c1.add(c2);
result.toString();
result = result.sub(c1);
result.toString();
console.log(result.module());
