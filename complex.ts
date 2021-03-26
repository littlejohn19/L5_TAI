class Complex {
    private readonly _re: number
    private readonly _im: number

    constructor(re: number, im: number) {
        this._re = re
        this._im = im
    }

    addComplex(num1: Complex): Complex {
        return new Complex(
            num1._re + this._re,
            num1._im + this._im)
    }

    subComplex(num1: Complex): Complex {
        return new Complex(
            num1._re - this._re,
            num1._im - this._im)
    }

    absComplex(): number {
        return Math.sqrt(this._re * this._re + this._im * this._im)
    }

    toString(): string {
        return "re:" + this._re + ", im: " + this._im
    }
}

let obj1 = new Complex(1, 2)
let obj2 = new Complex(3, 4)
let obj3 = obj1.addComplex(obj2)

console.log(obj3)
console.log(obj3.subComplex(obj1))
console.log(obj3.subComplex(obj1).absComplex())

