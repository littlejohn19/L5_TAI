"use strict";
var Complex = /** @class */ (function () {
    function Complex(real, imagine) {
        this.real = real;
        this.imaginary = imagine;
    }
    Complex.prototype.addComplex = function (complex) {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    };
    Complex.prototype.subtractComplex = function (complex) {
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    };
    Complex.prototype.module = function () {
        return (Math.abs(Math.sqrt(Math.pow(Number(this.real), 2) + Math.pow(Number(this.imaginary), 2))));
    };
    Complex.prototype.toString = function () {
        console.log("RE: ", this.real, ", IM: ", this.imaginary);
    };
    return Complex;
}());
var a = new Complex(2, 4);
var b = new Complex(1, 3);
var c = a.addComplex(b);
c.toString();
var d = c.subtractComplex(a);
d.toString();
var e = d.module();
console.log(e);
