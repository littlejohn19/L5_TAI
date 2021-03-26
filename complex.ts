class Complex {
    private re: number;
    private imag: number;

    constructor(re: number, imag: number){
        this.re=re;
        this.imag=imag;
    }
    getRe(){
        return this.re;
    }
    getImag(){
        return this.imag;
    }

    add(obj: Complex): Complex{
        return new Complex(this.re+obj.re, this.imag+obj.imag);
    }
    sub(obj: Complex): Complex{
        return new Complex(this.re-obj.re, this.imag-obj.imag);
    }
    mod(){
        return Math.sqrt((this.re*this.re)+(this.imag*this.imag));
    }
    write(){
        return this;
    }
}

let complex1=new Complex(18,10);
let complex2=new Complex(9,5);

console.log('Dodawanie: ',
    complex1.getRe(),', ',complex1.getImag(),'i + ',
    complex2.getRe(),', ',complex2.getImag(),'i = ',
    complex1.add(complex2).write()                );

let sub= complex1.sub(complex2);
console.log('Odejmowanie: ',
    complex1.getRe(),', ',complex1.getImag(),'i - ',
    complex2.getRe(),', ',complex2.getImag(),'i = ',
    complex1.sub(complex2).write()                );

console.log("Moduł :", complex1.sub(complex2).mod()  );