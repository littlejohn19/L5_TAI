"use strict"
class Complex {
    private real;
    private imaginary;

    constructor(real, imagine) {
        this.real = real;
        this.imaginary = imagine;
    }

    addComplex (complex: Complex) : Complex {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    }

    subtractComplex (complex: Complex) : Complex {
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    }

    module(){
        return (Math.abs(Math.sqrt(Math.pow(Number(this.real),2 ) + Math.pow(Number(this.imaginary), 2))));
    }

    toString(){
        console.log("RE: ", this.real, ", IM: ", this.imaginary);
    }
}

let a = new Complex(2,4);
let b = new Complex(1,3);

let c = a.addComplex(b);
c.toString();
let d = c.subtractComplex(a);
d.toString();
let e = d.module();
console.log(e);
