export class Calculadora implements ICalculadora {

    constructor() {}

    suma(a: number , b:number ) : number {     
        return a+b;
    }

    resta(a: number , b:number ): number {
        return a-b;
    }

    division(a: number , b:number ): number {
        return a/b;
    }

    multiplicacion(a: number , b:number ) : number {
        return a*b;
    }  
};

export interface ICalculadora  {
    suma (a: number , b:number ) : number
    resta(a: number , b:number ) : number
    division(a: number , b:number ) : number
    multiplicacion(a: number , b:number ) : number
};
