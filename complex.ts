class Complex {
    private x: number;
    private i: number;


    constructor(x: number, i: number) {
        this.x = x;
        this.i = i;
    }

    add(obj: Complex): Complex {
        return new Complex(this.x + obj.x, this.i + obj.i);
    }

    sub(obj: Complex): Complex {
        return new Complex(this.x - obj.x, this.i - obj.i);
    }

    modulo(): number{
        return Math.sqrt(this.x * this.x + this.i * this.i);
    }

    toString(){
        console.log('rzeczywita: ', this.x, ', urojona: ', this.i);
    }
}



let var1  = new Complex(4,5);
let var2 = new Complex(3,1);

let one = var1.add(var2);
console.log('Wynik dodawania: ');
one.toString();

let two = one.sub(var1);
console.log('Wynik odejmowania: ');
two.toString();

let three = two.modulo();
console.log('Modulo z odejmowania: ', three);