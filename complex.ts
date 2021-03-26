class Complex{
    private realNumber;
    private imaginaryNumber;
    

    constructor(realNumber: number, imgNumber: number){
        this.realNumber = realNumber;
        this.imaginaryNumber = imgNumber;
    }

    adding(second: Complex){
        return new Complex(this.realNumber + second.realNumber, this.imaginaryNumber + second.imaginaryNumber);
    }

    substraction(second: Complex){
        return new Complex(second.realNumber - this.realNumber, second.imaginaryNumber - this.imaginaryNumber);
    }

    module(complexNumber: Complex){
        return Math.sqrt(Math.pow(complexNumber.realNumber,2) + (Math.pow(complexNumber.imaginaryNumber,2)));
    }

    toString(complexNumber: Complex){
        if(complexNumber.imaginaryNumber > 0){
            console.log(complexNumber.realNumber + " + " + complexNumber.imaginaryNumber + "i");
        } else if(complexNumber.imaginaryNumber === 0){
            console.log(complexNumber.realNumber);
        } else {
            console.log(complexNumber.realNumber + " - " + complexNumber.imaginaryNumber + "i");
        }
    }
}

const complex1 = new Complex(5, 2);
const complex2 = new Complex(7, 4);

let result: Complex = complex1.adding(complex2);
complex1.toString(result);
result = complex1.substraction(result);
complex1.toString(result);
const resultNumber = complex1.module(result);
console.log(resultNumber);





