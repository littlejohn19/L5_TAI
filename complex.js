"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    addComplex(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    subComplex(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    module() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log('RE: ', this.real, ', ', 'IM: ', this.imaginary);
    }
}
let a = new Complex(2, 4);
let b = new Complex(4, 6);
a.toString();
b.toString();
console.log("Wynik dodawania: ");
let addResult = a.addComplex(b);
addResult.toString();
console.log("Wynik odejmowania: ");
let subResult = a.subComplex(b);
subResult.toString();
console.log("Wynik modułu: ");
let moduleResult = a.module();
console.log(moduleResult);
