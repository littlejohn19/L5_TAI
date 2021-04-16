var Complex = /** @class */ (function () {
    function Complex(x, i) {
        this.x = x;
        this.i = i;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.x + obj.x, this.i + obj.i);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.x - obj.x, this.i - obj.i);
    };
    Complex.prototype.modulo = function () {
        return Math.sqrt(this.x * this.x + this.i * this.i);
    };
    Complex.prototype.toString = function () {
        console.log('rzeczywita: ', this.x, ', urojona: ', this.i);
    };
    return Complex;
}());
var var1 = new Complex(4, 5);
var var2 = new Complex(3, 1);
var one = var1.add(var2);
console.log('Wynik dodawania: ');
one.toString();
var two = one.sub(var1);
console.log('Wynik odejmowania: ');
two.toString();
var three = two.modulo();
console.log('Modulo z odejmowania: ', three);
