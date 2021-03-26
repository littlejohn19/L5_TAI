class Complex{
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary:number){
        this.real = real;
        this.imaginary = imaginary;
    }

    addOperations(firstNumber:Complex): Complex{

        return new Complex(this.real +firstNumber.real,this.imaginary+firstNumber.imaginary);
    }

     subOperations(firstNumber:Complex): Complex{

       return new Complex(this.real - firstNumber.real,this.imaginary - firstNumber.imaginary);
    }
     moduloOperations():number{

        return Math.sqrt(Math.pow(this.real,2) + Math.pow(this.imaginary,2));
    }

   toString(){
        console.log('Re:', this.real,' ', 'Im:', this.imaginary);
   }

}
    let b  = new Complex(3,3);

    let a = new Complex(2,3);
    //addOperations(a).toString();
    let sum = a.addOperations(b);
    console.log('Sum of object: ');
    sum.toString();

    let substraction = a.subOperations(b);
    console.log('Substraction of object: ');
    substraction.toString();

    let modulo = sum.moduloOperations();

    console.log('Modulo of sum');
    console.log(modulo);

