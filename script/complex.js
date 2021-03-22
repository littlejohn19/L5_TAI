var ComplexNumber = /** @class */ (function () {
    function ComplexNumber(real, img) {
        this.real = real;
        this.img = img;
    }
    ComplexNumber.prototype.add = function (n1) {
        return new ComplexNumber(this.real + n1.real, this.img + n1.img);
    };
    ComplexNumber.prototype.sub = function (n1) {
        return new ComplexNumber(this.real - n1.real, this.img - n1.img);
    };
    ComplexNumber.prototype.module = function () {
        return ((this.img * this.img) + (this.real * this.real));
    };
    ComplexNumber.prototype.toString = function () {
        console.log('Real: ' + this.real + ' Img:' + this.img);
    };
    ;
    return ComplexNumber;
}());
var a = new ComplexNumber(2, 3);
var b = new ComplexNumber(5, 7);
a.toString();
b.toString();
var c = a.add(b);
c.toString();
var d = c.sub(a);
d.toString();
console.log(d.module());
