class Complex {
    private re: number;
    private img: number;

    constructor(re: number, img: number) {
        this.re = re;
        this.img = img;
    }

    add(obj: Complex): Complex{
        return new Complex(this.re + obj.re, this.img + obj.img);
    }

    subtract(obj: Complex): Complex{
        return new Complex(this.re - obj.re, this.img - obj.img);
    }

    module(): number{
        return Math.sqrt(Math.pow(this.re,2) + Math.pow(this.img,2));
    }
    toString(){
        console.log('Real: ', this.re , 'Imaginary: ', this.img);
        
    }
}

let complex_1 = new Complex(1,2);
let complex_2 = new Complex(3,4);

console.log('Wynik dodawania: ');
let add = complex_1.add(complex_2);
console.log(add);
add.toString();

console.log('Wynik odejmowania: ');
let sub = complex_2.subtract(complex_1);
console.log(sub);   
sub.toString();

console.log('Wynik modułu: ', sub.module());

