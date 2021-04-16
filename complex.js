var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.im = im;
        this.re = re;
    }
    Complex.prototype.add = function (num1) {
        var tempRe = num1.re + this.re;
        var tempIm = num1.im + this.im;
        return new Complex(tempRe, tempIm);
    };
    Complex.prototype.subtract = function (num1) {
        var tempRe = num1.re - this.re;
        var tempIm = num1.im - this.im;
        return new Complex(tempRe, tempIm);
    };
    Complex.prototype.module = function () {
        return Math.sqrt(this.re ^ 2 + this.im ^ 2);
    };
    Complex.prototype.toString = function () {
        return "re: " + this.re + ", im: " + this.im;
    };
    return Complex;
}());
var obj1 = new Complex(2, 3);
var obj2 = new Complex(5, 10);
obj1.add(obj2);
obj2.subtract(obj1);
obj1.module();
console.log(obj1.toString());
console.log("XDDD");
