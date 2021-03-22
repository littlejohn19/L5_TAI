var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (object) {
        return new Complex(this.real + object.real, this.imaginary + object.imaginary);
    };
    Complex.prototype.sub = function (object) {
        return new Complex(this.real - object.real, this.imaginary - object.imaginary);
    };
    Complex.prototype.module = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log("RZECZYWISTA: " + this.real + (this.real != 0 ? ", UROJONA: " + this.imaginary : ""));
    };
    return Complex;
}());
var c1 = new Complex(3, 4);
var c2 = new Complex(6, 2);
var result = c1.add(c2);
result.toString();
result = result.sub(c1);
result.toString();
console.log(result.module());
