"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    subtract(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    module() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log('RE: ', this.real, ', ', 'IM: ', this.imaginary);
    }
}
let a = new Complex(2, 3);
let b = new Complex(5, 7);
a.toString();
let c = a.add(b);
c.toString();
let d = c.subtract(a);
d.toString();
let e = d.module();
console.log(e);
