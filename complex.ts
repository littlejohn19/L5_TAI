class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number) {
        this.im = im;
        this.re = re;
    }

    add(num1: Complex): Complex{
        let tempRe = num1.re + this.re
        let tempIm = num1.im + this.im

        return new Complex(tempRe,tempIm);
    }

    subtract(num1: Complex): Complex{
        let tempRe = num1.re - this.re
        let tempIm = num1.im - this.im

        return new Complex(tempRe,tempIm);
    }

    module(): number{
        return Math.sqrt(this.re^2 + this.im^2)
    }

    toString(): string{
        return "re: "+this.re+", im: "+this.im;
    }
}


let obj1 = new Complex(2,3);
let obj2 = new Complex(5,10);

obj1.add(obj2);
obj2.subtract(obj1)
obj1.module()
console.log(obj1.toString())
console.log("XDDD")