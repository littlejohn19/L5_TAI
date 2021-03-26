class Complex {
    private real: number;
    private imagine: number;

    constructor(real: number, imagine: number) {
        this.real = real;
        this.imagine = imagine;
    }

    public static add(first: Complex, second: Complex) {
        return new Complex(first.real + second.real, first.imagine + second.imagine)
    }

    public static substract(first: Complex, second: Complex) {
        return new Complex(first.real - second.real, first.imagine - second.imagine)
    }

    public module() {
        return Math.sqrt(this.real * this.real + this.imagine * this.imagine);
    }

    public toString() {
        return `Complex { real: ${this.real}, imagine: ${this.imagine} }`;
    }
}

const complex1 = new Complex(3, 4);
const complex2 = new Complex(2, 5);

const complex3 = Complex.add(complex1, complex2);
console.log(`${complex1} + ${complex2} = ${complex3}`);

const complex4 = Complex.substract(complex3, complex1);
console.log(`${complex3} - ${complex1} = ${complex4}`);

const complex4module = complex4.module();
console.log(complex4module);
