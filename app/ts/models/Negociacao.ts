import { Imprimivel } from './imprimivel';

export class Negociacao extends Imprimivel{    

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
        super();
    }

    get volume(){
        return this.quantidade * this.valor;
    }

    paraTexto() : void {
        console.log("Impressão");
        console.log(
            `Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.volume}`
        );
    }
}