var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.addOperations = function (firstNumber) {
        return new Complex(this.real + firstNumber.real, this.imaginary + firstNumber.imaginary);
    };
    Complex.prototype.subOperations = function (firstNumber) {
        return new Complex(this.real - firstNumber.real, this.imaginary - firstNumber.imaginary);
    };
    Complex.prototype.moduloOperations = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log('Re:', this.real, ' ', 'Im:', this.imaginary);
    };
    return Complex;
}());
var b = new Complex(3, 3);
var a = new Complex(2, 3);
//addOperations(a).toString();
var sum = a.addOperations(b);
console.log('Sum of object: ');
sum.toString();
var substraction = a.subOperations(b);
console.log('Substraction of object: ');
substraction.toString();
var modulo = sum.moduloOperations();
console.log('Modulo of sum');
console.log(modulo);
