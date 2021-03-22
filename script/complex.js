"use strict";
class ComplexNumber {
    constructor(real, img) {
        this.real = real;
        this.img = img;
    }
    add(n1) {
        return new ComplexNumber(this.real + n1.real, this.img + n1.img);
    }
    sub(n1) {
        return new ComplexNumber(this.real - n1.real, this.img - n1.img);
    }
    module() {
        return ((this.img * this.img) + (this.real * this.real));
    }
    toString() {
        console.log('Real: ' + this.real + ' Img:' + this.img);
    }
    ;
}
var a = new ComplexNumber(2, 3);
var b = new ComplexNumber(5, 7);
a.toString();
b.toString();
var c = a.add(b);
c.toString();
var d = c.sub(a);
d.toString();
console.log(d.module());
