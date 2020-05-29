System.register(["./imprimivel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var imprimivel_1, Negociacao;
    return {
        setters: [
            function (imprimivel_1_1) {
                imprimivel_1 = imprimivel_1_1;
            }
        ],
        execute: function () {
            Negociacao = class Negociacao extends imprimivel_1.Imprimivel {
                constructor(data, quantidade, valor) {
                    super();
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                paraTexto() {
                    console.log("Impressão");
                    console.log(`Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.volume}`);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
