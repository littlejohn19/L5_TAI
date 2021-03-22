var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.subtract = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.module = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log('RE: ', this.real, ', ', 'IM: ', this.imaginary);
    };
    return Complex;
}());
var a = new Complex(2, 3);
var b = new Complex(5, 7);
a.toString();
var c = a.add(b);
c.toString();
var d = c.subtract(a);
d.toString();
var e = d.module();
console.log(e);
