var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this._re = re;
        this._im = im;
    }
    Complex.prototype.addComplex = function (num1) {
        return new Complex(num1._re + this._re, num1._im + this._im);
    };
    Complex.prototype.subComplex = function (num1) {
        return new Complex(num1._re - this._re, num1._im - this._im);
    };
    Complex.prototype.absComplex = function () {
        return Math.sqrt(this._re * this._re + this._im * this._im);
    };
    Complex.prototype.toString = function () {
        return "re:" + this._re + ", im: " + this._im;
    };
    return Complex;
}());
var obj1 = new Complex(1, 2);
var obj2 = new Complex(3, 4);
var obj3 = obj1.addComplex(obj2);
console.log(obj3);
console.log(obj3.subComplex(obj1));
console.log(obj3.subComplex(obj1).absComplex());
