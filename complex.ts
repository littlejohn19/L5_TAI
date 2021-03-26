class Complex {
    private _re: number;
    private _im: number;

    constructor(re: number, im: number) {
        this._re = re;
        this._im = im;
    }

    public add(complex: Complex): Complex {
        const re = this._re + complex._re;
        const im = this._im + complex._im;
        return new Complex(re, im);
    }

    public subtract(complex: Complex): Complex {
        const re = this._re - complex._re;
        const im = this._im - complex._im;
        return new Complex(re, im);
    }

    public mod(): number {
        return Math.sqrt(this._re * this._re + this._im * this._im);
    }

    public toString(): void {
        console.log("RE " + this._re + ", IM " + this._im);
    }
}

const complex1 = new Complex(1, 2);
const complex2 = new Complex(3, 4);

const complex3 = complex1.add(complex2);
complex3.toString();
const complex4 = complex3.subtract(complex1);
complex4.toString();
const mod = complex4.mod();
console.log(mod);